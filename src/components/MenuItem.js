import React, { useState } from "react";
import ItemList from "./ItemList";
export function MenuItem({ index, title, itemCards, length }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = (index) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex  flex-col m-4 w-6/12" key={index}>
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleOpenAccordion(index)}
      >
        <h1 className="font-bold text-lg">
          {title} ({length})
        </h1>
        <p>↓</p>
      </div>
      {isOpen && <ItemList itemCards={itemCards} />}
    </div>
  );
}
