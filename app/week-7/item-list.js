"use client";

import React, {useState, useEffect} from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

const ItemList = ({items = []}) => {

  const [sortBy , setSortBy] = useState("name");
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
      <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'none' : '' }}>
        <button class="bg-orange-500 p-1 m-2 w-28">Name</button>
      </button>
      <button onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'none' : '' }}>
        <button class="bg-orange-700 p-1 m-2 w-28">Category</button>
      </button>


      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
}

export default ItemList;
