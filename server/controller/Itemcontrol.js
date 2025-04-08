const Joi = require("joi");
const ItemSchema = require("../model/schema.js");
const userSchema = require("../model/Users");
// ✅ Joi Schema for Validation
const itemValidationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  genre: Joi.array().items(Joi.string()),
  // genre: Joi.string().min(3).max(50).required(),
  year: Joi.number()
    .integer()
    .min(1900)
    .max(new Date().getFullYear())
    .required(),
  description: Joi.string().min(10).max(5000).required(),
  studio: Joi.string().min(3).max(100).required(),
  imageurl: Joi.string().uri().required(),
    created_by: Joi.string().required(),
});

// 🔹 Create a new item with Joi validation
const create = async (req, res) => {
  try {
    const formData = req.body;
    console.log("Received formData:", formData);
    // formData.genre = formData.genre.split(",");
    const { error } = itemValidationSchema.validate(formData);
    if (error) {
      console.log("Validation error:", error.details);
      return res.status(400).json({ message: error.details[0].message });
    }
    const newItem = new ItemSchema(formData);
    await newItem.save();

    res.status(201).json({ message: "Item created successfully!", newItem });
  } catch (error) {
    console.error("Error creating item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// 🔹 Fetch all items
const fetch = async (req, res) => {
  try {
    const items = await ItemSchema.find({});
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found." });
    }
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// 🔹 Fetch a single item by ID with Joi validation
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id: ", id);
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const item = await ItemSchema.findOne({ _id: id });
    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// 🔹 Update an item with Joi validation
const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const formData = req.body;
    // formData.genre = formData.genre.split(",");
    console.log(formData);
    const { error } = itemValidationSchema.validate(formData);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const updatedItem = await ItemSchema.findByIdAndUpdate(id, req.body);
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.status(200).send({ message: "working fine" });
  } catch (error) {
    console.error("Error updating item:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// 🔹 Delete an item with Joi validation
const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const item = await ItemSchema.findByIdAndDelete(id);
    if (!item) {
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

const users= async (req, res) => {
  try {
    const users = await userSchema.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const usercreatedby =async (req, res) => {
  try {
    const animes = await ItemSchema.find({
      created_by: req.params.userId,
    }).populate("created_by");
    res.json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { create, fetch, update, Delete, getById,usercreatedby,users };
