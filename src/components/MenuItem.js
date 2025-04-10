import React, { useState } from "react";
import ItemList from "./ItemList";
export function MenuItem({
  title,
  itemCards,
  length,
  isOpen,
  setIsOpen,
  handleOpenAccordion,
  index,
}) {
  return (
    <div className="flex  flex-col m-4 w-6/12">
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
