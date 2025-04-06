import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Outlet } from "react-router";
import useInternet from "../utils/hook/useInternet";

const Body = () => {
  const [restaurantName, setRestaurantName] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const internetStatus = useInternet();
  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const res = await data.json();
    setRestaurantName(res?.data?.cards.slice(3));
    setFilteredRes(res?.data?.cards.slice(3));
  };

  const handleSearch = () => {
    // write a way to filter the data from array based on userInput

    const filteredSearch = restaurantName.filter((item) => {
      return item?.card?.card?.info?.name
        .toLowerCase()
        .includes(userInput.toLowerCase());
    });
    setFilteredRes(filteredSearch);

    setUserInput("");
  };

  if (!internetStatus) {
    return (
      <div>
        Looks like you are offline, please check your internet connection and
        refresh the page
      </div>
    );
  }
  // conditional rendering
  if (restaurantName.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search mx-4 p-4">
          <input
            type="text"
            name=""
            id="search-box"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border border-solid border-black p-2"
            placeholder="Search pizza ..."
          />
          <button
            className="p-2 mx-2 bg-green-100 cursor-pointer rounded-md"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="p-2 mx-2 bg-blue-200 cursor-pointer rounded-md"
            onClick={() => {
              const newResList = restaurantName.filter((resData) => {
                return resData.card.card.info.avgRating > 4;
              });
              setFilteredRes(newResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <Outlet />
      <div className="flex flex-wrap">
        {filteredRes.map((resData) => {
          return (
            <ResCard
              resData={resData?.card?.card?.info}
              key={resData?.card?.card?.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
