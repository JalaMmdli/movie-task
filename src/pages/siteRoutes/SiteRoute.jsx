import React from "react";
import { Outlet } from "react-router-dom";
import { WishlistProvider } from "../../contexts/WishlistContext";

const SiteRoute = () => {
  return (
    <WishlistProvider>
      <Outlet />
    </WishlistProvider>
  );
};

export default SiteRoute;
