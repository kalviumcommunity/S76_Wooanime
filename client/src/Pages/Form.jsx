import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
  const { id } = useParams(); // Retrieve id from the URL
  // console.log(id);
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [formData, setFormData] = useState({
    title: "",
    genre: [],
    year: "",
    description: "",
    created_by: userId ||"",
    studio: "",
    imageurl: "",
  });
  const [message, setMessage] = useState("");
  // formData.genre = formData.genre.split(",");
  const fetchFormValues = async () => {
    console.log("Fetch Form Values: ", id);
    if (id) {
      await axios
        .get(`http://localhost:3000/api/fetch/${id}`)
        .then((response) => {
          console.log("Fetched data:", response.data);
          const data = response.data || response.data;
          setFormData({
            title: data.title || "",
            genre: data.genre || [],
            year: data.year || "",
            description: data.description || "",
            studio: data.studio || "",
            imageurl: data.imageurl || "",
            created_by:  userId || "",
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  // Fetch existing data when editing
  useEffect(() => {
    fetchFormValues();
  }, [id]);

  const handleChange = (e) => {
   const  {name,value}=e.target;
    setFormData((prevData)=>({ ...prevData, [name]: name=="genre"? value.split(",").map((g)=>g.trim()):value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting formData:", formData);
    console.log(
      "Created_by:",
      formData.created_by,
      "Type:",
      typeof formData.created_by
    );
    try {
      if (isEdit) {
        await axios.put(`http://localhost:3000/api/update/${id}`, formData);
        setMessage("Data updated successfully!");
      } else {
        await axios.post("http://localhost:3000/api/create", formData);
        setMessage("Data submitted successfully!");
      }
      navigate("/explore"); // Redirect after submission
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error submitting data";
      setMessage(errorMessage);
      console.error("Error:", errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">
          {id ? "Edit Anime Entry" : "Add New Anime"}
        </h2>

        <label className="block mb-2 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700 font-medium">
          Genre
        </label>
        <input
          type="text"
          name="genre"
          value={formData.genre.join(", ")}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700 font-medium">
          Premiered Year
        </label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700 font-medium">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          rows="3"
          required
        ></textarea>

        <label className="block mt-4 mb-2 text-gray-700 font-medium">
          Studio
        </label>
        <input
          type="text"
          name="studio"
          value={formData.studio}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700 font-medium">
          Image URL
        </label>
        <input
          type="url"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
        >
          {id ? "Update" : "Submit"}
        </button>

        {message && (
          <p className="mt-4 text-center font-medium text-blue-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;
