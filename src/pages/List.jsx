import { useEffect, useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";

const List = () => {
  const { wishlists } = useContext(WishlistContext);

  useEffect(() => {
    console.log("Wishlist updated:", wishlists);
  }, [wishlists]);

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlists.map((w, i) => (
        <ul key={i}>
          <p>{w.name}</p>
          {w.items.map((item, j) => (
            <li key={j}>{item.name}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default List;
