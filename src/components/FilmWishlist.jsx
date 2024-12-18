import React from "react";

const FilmWishlist = (data) => {
  const removeToWishlist = (e) => {
    e.preventDefault();

    const index = data.wishlistItems.indexOf(data.film);

    if (index > -1) {
      const updatedWishlist = [
        ...data.wishlistItems.slice(0, index),
        ...data.wishlistItems.slice(index + 1),
      ];

      data.setWishlistItems(updatedWishlist);
    } else {
      console.error("Item not found in the wishlist");
    }
  };

  return (
    <div className="film">
      <div className="imgDiv">
        <img src={data.film.image.medium} alt="" />
      </div>
      <div className="info">
        <h3>{data.film.name}</h3>
        <p>{data.film.premiered}</p>
        <button onClick={removeToWishlist} className="removeFromWishlist">
          X
        </button>
      </div>
    </div>
  );
};

export default FilmWishlist;
