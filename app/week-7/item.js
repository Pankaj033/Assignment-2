import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <ul className="p-2 m-4 bg-slate-900 max-w-sm">
      <li className="container ml-8 mb-4 pl-1 p-2 cursor-pointer" onClick={() => onSelect({ name, quantity, category })}>
        <div>
          <strong>{name}</strong><br />
          Buy {quantity} in {category}
        </div>
      </li>
    </ul>
  );
};

export default Item;
