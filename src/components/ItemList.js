import React from "react";
function ItemList({ itemCards }) {
  return itemCards.map((item) => {
    const { name, price, imageId, description, id, defaultPrice } =
      item?.card?.info;
    console.log(item);

    return (
      <div
        className=" flex justify-between my-4 border border-white border-t-gray-300 py-6"
        key={id}
      >
        <div className="flex flex-col text-left justify-around w-[75%]">
          <h1 className="text-xl font-bold ">{name}</h1>
          <h2>
            {"₹"}
            {price / 100 || defaultPrice / 100}
          </h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className=" w-[25%]">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
            alt="foodItemImage"
            className="rounded-2xl h-full"
          />
          <button className="px-8 text-green-600 bg-white rounded-xl border bolder border-gray-300 cursor-pointer relative bottom-[45px] py-2">
            ADD
          </button>
        </div>
      </div>
    );
  });
}

export default ItemList;
