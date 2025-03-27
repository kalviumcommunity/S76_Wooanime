import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../components/Nav";
import Card from "../components/Card";

const ExplorePage = () => {
  const [animes, setAnimes] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/fetch");
        console.log(response.data);
        setAnimes(response.data || []);
      } catch (error) {
        console.error("Error fetching Anime details", error);
      }
    };
    fetchAnime();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this anime?")) {
      try {
        await axios.delete(`http://localhost:3000/api/delete/${id}`);

        setAnimes(animes.filter((item) => item._id !== id));
        alert("Anime deleted successfully!");
      } catch (err) {
        console.error(
          "Error deleting anime:",
          err.response?.data || err.message
        );
        alert("Failed to delete anime.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[url(AnimeDesign.png)] bg-cover bg-fixed grid grid-cols-1 ">
        <img src="logo.png" alt="Logo" className="mx-auto mt-11" />
        {animes.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.title}
            genre={item.genre}
            description={item.description}
            year={item.year}
            studio={item.studio}
            imageurl={item.imageurl}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ExplorePage;
