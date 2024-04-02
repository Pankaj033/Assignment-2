"use client";

import { useState } from "react";
const NewItem = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = { name, quantity, category };

        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-left">
            <form onSubmit={handleSubmit} className="bg-slate-900 shadow-md  rounded px-15 pt-1 p-2 pb-70 mb-2  w-80">
                <div className="mb-3">
                    <label className="block text-white-700 text-1xl font-bold mb-2" htmlFor="name">
                        Add New Item:
                    </label>
                    <input
                        className="shadow appearance-none  border black rounded w-full py-1.5 px-3 text-black leading-tight focus:outline-black focus:shadow-outline"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex mb-3">
                    <div className="flex justify-between w-1 mr-1/2"></div>
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="quantity">
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                    />
                </div>
                <div className="mb-6 w-1/2 mr-3">
                    <div className="justify-between  w-1/2 mr-3"></div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-50 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="produce">produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="Submit"
                    >
                        +
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewItem;

