"use client"
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const sortedItems = items.sort((a, b) =>
    sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div>
      <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'none' : '' }}>
        <button class="bg-orange-500 p-1 m-2 w-28">Name</button>
      </button>
      <button onClick={() => setSortBy('ategory')} style={{ backgroundColor: sortBy === 'category' ? 'none' : '' }}>
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

export default ItemList;
