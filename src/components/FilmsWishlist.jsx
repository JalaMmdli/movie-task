import React, { useContext, useRef } from "react";
import FilmWishlist from "./FilmWishlist";
import { WishlistContext } from "../contexts/WishlistContext";

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default FilmsWishlist;
