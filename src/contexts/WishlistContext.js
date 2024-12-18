import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlists, setWishlists }}>
      {children}
    </WishlistContext.Provider>
  );
};
