import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantName, setRestaurantName] = useState(resList);

  // useEffect(function () {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );
  //   const res = await data.json();
  //   console.log(res);
  //   const restList = res?.data?.cards[3].card;
  //   setRestaurantName(res?.data?.cards[3]?.card);
  // };

  // conditional rendering
  if (restaurantName.length === 0) {
    return <Shimmer />;
  }
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
