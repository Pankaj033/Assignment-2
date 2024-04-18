
"use client";

import React, { useState, useEffect } from "react";
import Item from "./item";
// import items from "./items.json";

const ItemList = ({ items = [] }) => {

  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }

      });
      setSortedItems(sorted);
    }
  }, [items, sortBy]);



  return (

    <div>
      <button onClick={() => setSortBy('name')} className="p-2 m-1 text-xl bg-orange-400 hover:bg-gray-300">
        Name</button>
      <button onClick={() => setSortBy('category')} className="p-2 m-1 text-xl bg-orange-400   hover:bg-gray-300">
        Category</button>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
