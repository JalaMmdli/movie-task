import { useEffect, useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import { Link } from "react-router-dom";


const List = () => {
  const { wishlists } = useContext(WishlistContext);

  useEffect(() => {
    console.log("Wishlist updated:", wishlists);
  }, [wishlists]);

  return (
    <div className="list">
      <h1>Wishlist</h1>
      <div className="goToHome">
         <Link to={"/"} > Go To Home</Link> 
         </div>
      {wishlists.length == 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        wishlists.map((w, i) => (
          <ul key={i} >
            <h2 className="wishlistName">{w.name}</h2>
            <hr />
           <div className="films">
           {w.items.map((item, j) => (
              <li key={j}><div className="film">
                <div className="imgDiv"> <img src={item.image.medium} alt="" /></div>
               <div className="info"> <h3>{item.name}</h3> </div>
                <a href={"https://www.imdb.com/title/" + item.externals.imdb}>Go To Detail</a>
                </div> </li>
            ))}
           </div>
          </ul>
        ))
      )}
      
    </div>
  );
};

export default List;
