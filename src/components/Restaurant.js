import useResData from "../utils/hook/useResData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const Restaurant = () => {
  const { id } = useParams();
  const resInfo = useResData(id);

  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const itemCategory =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    return (
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-6">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")}
          {" -  "} {costForTwoMessage}
        </p>
        {/* categories accordion */}
        {itemCategory.map((item, index) => {
          const { title, itemCards } = item?.card?.card;
          return (
            <div className="flex  flex-col m-4 w-[800px]" key={index}>
              <h1 className="font-bold text-lg">{title}</h1>
              {itemCards.map((item) => {
                const { name, price, imageId, description, id } =
                  item?.card?.info;

                return (
                  <div
                    className=" flex justify-between my-4 border border-white border-t-gray-300 py-6 "
                    key={id}
                  >
                    <div className="flex flex-col text-left justify-around">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <h2>
                        {"₹"}
                        {price / 100}
                      </h2>
                      <p className="text-gray-500">{description}</p>
                    </div>
                    <div className="min-w-36 mx-2">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,/${imageId}.jpg`}
                        alt="foodItemImage"
                        className="h-36 w-36 rounded-2xl"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Restaurant;
