import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../components/Nav";
import Card from "../components/Card";

const ExplorePage = () => {
  const [animes, setAnimes] = useState([]);
   const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState("");
   const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log(response.data);
        setUsers(response.data || []);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    }
    const fetchAnime = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/fetch");
        console.log(response.data);
        setAnimes(response.data || []);
      } catch (error) {
        console.error("Error fetching Anime details", error);
      }
    };

    fetchUsers();
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
  const handleUserChange = async (e) => {
    const userId = e.target.value;
    localStorage.setItem("userId", userId);

    setSelectedUser(userId);

    if (userId === "") {
      
      fetch("http://localhost:3000/api/fetch")
        .then((res) => res.json())
        .then((data) => setAnimes(data));
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/usercreatedby/${userId}`
      );
      const data = await res.json();
      setAnimes(data);
    } catch (err) {
      console.error("Error fetching filtered combos:", err);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-600 text-2xl mt-10">
        Error in Fetching Product
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-end ">
        <select
          className="p-2 m-2 bg-violet-600 text-white rounded-md shadow-md focus:ring-2 focus:ring-violet-400 absolute"
          onChange={handleUserChange}
          value={selectedUser}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
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
