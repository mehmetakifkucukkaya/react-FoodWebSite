import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}

      <div className="rounded-xl relative">
        {/* Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Asian Special </p>
          <p className="px-2 text-gray-300">Through 11/26</p>
          <button className="rounded-lg border-white bg-orange-500 text-black mx-2 px-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-gida-restoran-kasik-icecekler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      {/* Card 2*/}

      <div className="rounded-xl relative">
        {/* Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Chef's Special</p>
          <p className="px-2 text-gray-300">Order Daily</p>
          <button className="rounded-lg border-white bg-orange-500 text-black mx-2 px-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      {/* Card 3 */}

      <div className="rounded-xl relative">
        {/* Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Fried Chicken With Special Sauce
          </p>
          <p className="px-2 text-gray-300">Order Daily</p>
          <button className="rounded-lg border-white bg-orange-500 text-black mx-2 px-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
