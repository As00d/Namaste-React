import React, { useState } from "react";
import ItemList from "./ItemList";
export function MenuItem({
  index,
  title,
  itemCards,
  handleOpenAccordion,
  length,
}) {
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
      <ItemList itemCards={itemCards} />
    </div>
  );
}
