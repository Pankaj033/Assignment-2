"use client"

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main >
      <h1 className='font-bold text-3xl p-3'>Shopping list</h1>
      <NewItem addItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}