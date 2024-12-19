import React, { useEffect, useState } from "react";
import Film from "./Film";
import NewImg from "../assets/images/vaiana2-nl.webp";
import axios from "axios";

const Films = (prompt) => {



  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  const input = document.querySelector(".searchInput")
  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      setData(response.data);
      setFilms(response.data.slice(0, 21));
      // console.log(response.data)
    });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    if (input.value.length > 0) {
      setFilms(
        data.filter((x) => x.name.toLowerCase().includes(input.value.toLowerCase()))
      );
    }else{
      setFilms(data.slice(0, 21));
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input type="text" className="searchInput"/>
        <button type="submit" className="submit">Search</button>
      </form>
      <div className="films">
        {films.length == 0 ? (
          <p>Not Found</p>
        ) : (
          films.map((f, i) => {
            return <Film film={f} wishlistItems={prompt.wishlistItems} setWishlistItems={prompt.setWishlistItems} key={i} />;
          })
        )}
      </div>
    </>
  );
};

export default Films;
