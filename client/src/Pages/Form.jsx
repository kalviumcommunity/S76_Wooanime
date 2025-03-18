import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Form = () => {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    description: "",
    studio: "",
    imageurl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(
              "http://localhost:3000/api/create",
              form
            );
            console.log(response.data);
            navigate("/explore");
    } catch (err) {
      console.log("Error while Posting", err);
    }
    // if (!title || !genre || !year || !description || !studio || !imageurl) {
    //   alert("All fields are required");
    // } else {
    //   navigate("/explore");
    // }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white font-bold ">
      <form
        action="submit"
        className="flex flex-col border-2 border-white p-20 rounded-2xl gap-2 "
      >
        <label htmlFor="title">AnimeName</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={form.title}
          className="border-1 border-white rounded-xs"
          required
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          onChange={handleChange}
          value={form.genre}
          className="border-1 border-white rounded-xs"
          required
        />
        <label htmlFor="year">Premiered Year</label>
        <input
          type="number"
          name="year"
          onChange={handleChange}
          value={form.year}
          className="border-1 border-white rounded-xs"
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={form.description}
          className="border-1 border-white rounded-xs"
        ></textarea>
        <label htmlFor="studio">Studio</label>
        <input
          type="text"
          id="studio"
          name="studio"
          onChange={handleChange}
          value={form.studio}
          className="border-1 border-white rounded-xs"
          required
        />
        <label htmlFor="image">ImageUrl</label>
        <input
          type="url"
          id="image"
          name="imageurl"
          onChange={handleChange}
          value={form.imageurl}
          className="border-1 border-white rounded-xs"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="border-1 border-white rounded-xs bg-blue-500 mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
