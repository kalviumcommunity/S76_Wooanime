import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav";
import axios from "axios";
import Card from "../components/Card";
const ExplorePage = () => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/fetch");
        setAnimes(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error("Error fetching Anime details", error);
      }
    };
    fetchAnime();
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-[url(AnimeDesign.png)] bg-cover bg-fixed grid  grid-cols-1  gap-40">
        <img src="logo.png" alt="" className="ml-[700px] mt-11"/>
        {animes.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            genre={item.genre}
            description={item.description}
            year={item.year}
            studio={item.studio}
            imageurl={item.imageurl}
          />
        ))}
      </div>
    </>
  );
};

export default ExplorePage;
