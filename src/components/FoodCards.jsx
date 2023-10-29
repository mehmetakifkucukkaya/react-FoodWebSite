import React, { useState } from "react";
import { data } from "../data/data.js";

const FoodCards = () => {
  const [foods, setFoods] = useState(data);

  //Type Filter metodu
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Price Filter metodu
  const priceType = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-10 ">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Top Rated Menu
      </h1>

      {/* Filter Row*/}
      <div className="flex felx-col lg:flex-row justify-between">
        {/* Filter Type*/}
        <div>
          <p className="font-bold text-gray-800 ">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price*/}
        <div>
          <p className="font-bold text-gray-800 ">Filter Price</p>
          <div className="flex justify-between max-w-[380px] w-full">
            <button
              onClick={() => priceType("$")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => priceType("$$")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => priceType("$$$")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => priceType("$$$$")}
              className="px-2 py-1 border-2 rounded-lg m-1 border-green-600 text-green-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={item.id}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="text-white bg-orange-500 rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
