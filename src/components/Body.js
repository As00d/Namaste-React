import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [restaurantName, setRestaurantName] = useState(resList);

  // NORMAL JS VARIABLE

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newResList = restaurantName.filter((resData) => {
              return resData.card.card.info.avgRating > 4;
            });
            setRestaurantName(newResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantName.map((resData) => {
          return <ResCard resData={resData} key={resData.card.card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
