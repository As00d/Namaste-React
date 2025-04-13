import { MenuItem } from "./MenuItem";
import useResData from "../utils/hook/useResData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";

const Restaurant = () => {
  const { id } = useParams();
  const resInfo = useResData(id);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleOpenAccordion = (index) => {
    if (index === value) {
      setValue(null);
    } else {
      setValue(index);
    }
  };
  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const itemCategory = resInfo?.cards[
      resInfo?.cards.length - 1
    ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(itemCategory);
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
          // controlled component
          return (
            <MenuItem
              title={title}
              itemCards={itemCards}
              key={index}
              length={item?.card?.card?.itemCards.length}
              isOpen={index === value ? true : false}
              setIsOpen={setIsOpen}
              handleOpenAccordion={handleOpenAccordion}
              index={index}
            />
          );
        })}
      </div>
    );
  }
};

export default Restaurant;
