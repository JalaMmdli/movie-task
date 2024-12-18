import React, { useState } from "react";
import "../assets/styles/index.scss";
import FilmsWishlist from "../components/FilmsWishlist";
import Films from "../components/Films";

const Home = (prompt) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  console.log(prompt)
  return (
    <div className="home">
      <div className="leftBar">
        <Films
          wishlistItems={wishlistItems}
          setWishlistItems={setWishlistItems}
        />
      </div>
      <div className="rightBar">
        <FilmsWishlist
          wishlistItems={wishlistItems}
          setWishlistItems={setWishlistItems}
        />
      </div>
    </div>
  );
};

export default Home;
