import React, { useEffect, useState } from "react";


const Film = (data) => {
  const [isExistWishlist, setIsExistWishlist] = useState(false);

  useEffect(() => {
    let isExist = data.wishlistItems.some((x) => x == data.film);

    if (isExist) setIsExistWishlist(true);
    else setIsExistWishlist(false)
  }, [data.wishlistItems]);

  const addToWishlist = (e) => {
    e.preventDefault();

    if (isExistWishlist) return;

    data.setWishlistItems([...data.wishlistItems, data.film]);
    setIsExistWishlist(true)
  };

  return (
    <div
      className="film"
      target="_blank"
      
    >
      <div className="imgDiv">
        <img src={data.film.image.medium} alt="" />
      </div>
      <div className="info">
        <h3>{data.film.name}</h3>
        <p>{data.film.premiered}</p>
        {isExistWishlist ? (
          <button onClick={addToWishlist} className="addToList">
            Added
          </button>
        ) : (
          <button onClick={addToWishlist} className="addToList">
            Add To List
          </button>
        )}
      </div>
    </div>
  );
};

export default Film;
