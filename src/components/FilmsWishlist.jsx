import React, { useContext, useRef } from "react";
import FilmWishlist from "./FilmWishlist";
import { WishlistContext } from "../contexts/WishlistContext";
import { Link } from "react-router-dom";

const FilmsWishlist = (prompt) => {
  const nameInputRef = useRef(null);
  const { wishlists, setWishlists } = useContext(WishlistContext);

  const submitWishlist = (e) => {
    e.preventDefault();

    let name = nameInputRef.current.value;

    let wishlist = {
      name: name,
      items: prompt.wishlistItems,
    };

    setWishlists([...wishlists, wishlist]);
    prompt.setWishlistItems([]);
    nameInputRef.current.value = "";
    console.log(wishlists);
  };

  return (
    <form onSubmit={submitWishlist}>
      <div className="wishlistName">
        <input type="text" required className="wishlistInput" ref={nameInputRef} />
      </div>
      <div className="films">
      {prompt.wishlistItems?.map((item, i) => {
        return (
          <FilmWishlist
            film={item}
            wishlistItems={prompt.wishlistItems}
            setWishlistItems={prompt.setWishlistItems}
            key={i}
          />
        );
      })}
      </div>
      <button type="submit" className="submitToWoshlist">Submit</button>
      <div className="goToList">
         <Link to={"list"} > Go to List</Link> 
         </div>
    </form>
  );
};

export default FilmsWishlist;
