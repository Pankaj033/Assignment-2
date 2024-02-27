import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main class="bg-slate-950">
      <h1 class="text-4xl font-bold m-3">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
