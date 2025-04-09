const Joi = require("joi");
const pool = require("../db");


const itemValidationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  genre: Joi.array().items(Joi.string()),
  year: Joi.number()
    .integer()
    .min(1900)
    .max(new Date().getFullYear())
    .required(),
  description: Joi.string().min(10).max(5000).required(),
  studio: Joi.string().min(3).max(100).required(),
  imageurl: Joi.string().uri().required(),
  created_by: Joi.number().required(),
});


const create = async (req, res) => {
  try {
    const formData = req.body;
    const { error } = itemValidationSchema.validate(formData);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const genreString = formData.genre.join(","); 

    const [result] = await pool.query(
      `INSERT INTO items (title, genre, year, description, studio, imageurl, created_by)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        formData.title,
        genreString,
        formData.year,
        formData.description,
        formData.studio,
        formData.imageurl,
        formData.created_by,
      ]
    );

    const newItem = {
      id: result.insertId,
      ...formData,
      genre: genreString.split(","),
    };

    res.status(201).json({ message: "Item created successfully!", newItem });
  } catch (error) {
    console.error("Error creating item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const fetch = async (req, res) => {
  try {
    const [items] = await pool.query("SELECT * FROM items");
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found." });
    }

    const result = items.map((item) => ({
      ...item,
      genre: item.genre ? item.genre.split(",") : [],
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching items:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const getById = async (req, res) => {
  const { id } = req.params;
  if (!Number(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM items WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Item not found." });
    }

    const item = rows[0];
    item.genre = item.genre ? item.genre.split(",") : [];

    res.json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const formData = req.body;

  if (!Number(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const { error } = itemValidationSchema.validate(formData);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const genreString = formData.genre.join(",");

  try {
    const [result] = await pool.query(
      `UPDATE items SET title = ?, genre = ?, year = ?, description = ?, studio = ?, imageurl = ?, created_by = ? WHERE id = ?`,
      [
        formData.title,
        genreString,
        formData.year,
        formData.description,
        formData.studio,
        formData.imageurl,
        formData.created_by,
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const Delete = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const [result] = await pool.query("DELETE FROM items WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.json({ message: "Item deleted successfully!" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const users = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT id, username FROM users");
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const usercreatedby = async (req, res) => {
  const { userId } = req.params;

  try {
    const [result] = await pool.query(
      "SELECT * FROM items WHERE created_by = ?",
      [userId]
    );

    const withGenre = result.map((item) => ({
      ...item,
      genre: item.genre ? item.genre.split(",") : [],
    }));

    res.json(withGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  fetch,
  update,
  Delete,
  getById,
  usercreatedby,
  users,
};
