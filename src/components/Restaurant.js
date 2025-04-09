import { MenuItem } from "./MenuItem";
import useResData from "../utils/hook/useResData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";

const Restaurant = () => {
  const { id } = useParams();
  const resInfo = useResData(id);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = (index) => {
    setIsOpen(!isOpen);
  };
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
          const { title, itemCards, widgetId } = item?.card?.card;
          return (
            <MenuItem
              index={index}
              title={title}
              itemCards={itemCards}
              key={index}
              handleOpenAccordion={handleOpenAccordion}
              isOpen={isOpen}
              length={item?.card?.card?.itemCards.length}
            />
          );
        })}
      </div>
    );
  }
};

export default Restaurant;
