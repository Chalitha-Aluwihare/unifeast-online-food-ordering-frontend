import React from "react";
import Pizza from "../../assets/menu/pizza.png";
import Burger from "../../assets/menu/burger.png";
import FriedRice from "../../assets/menu/fried-rice.png";
import Noodles from "../../assets/menu/noodles.png";
import Dounats from "../../assets/menu/donut.png";

const Menu = () => {
  return (
    <div>
      {/* Menu Categories headline */}
      <div className="flex flex-col leading-5">
        <span className="text-black text-[20px]  font-bold">
          Menu Categories
        </span>
        <span className="text-black font-semibold text-[14px]">
          Select your favorites!
        </span>
      </div>
      <div className="flex items-center gap-5 p-2 sm:pl-0 sm:gap-11">
        {/* Pizza */}
        <div className="flex items-center justify-center flex-col">
          <img className="h-[40px]" src={Pizza} alt="" />
          <span className="text-[15px]">Pizza</span>
        </div>

        {/* Burger */}
        <div className="flex items-center justify-center flex-col">
          <img className="h-[40px]" src={Burger} alt="" />
          <span className="text-[15px]">Burger</span>
        </div>

        {/* Fried Rice */}
        <div className="flex items-center justify-center flex-col">
          <img className="h-[40px]" src={FriedRice} alt="" />
          <span className="text-[15px]">Fried Rice</span>
        </div>

        {/* Noodles */}
        <div className="flex items-center justify-center flex-col">
          <img className="h-[40px]" src={Noodles} alt="" />
          <span className="text-[15px]">Noodles</span>
        </div>

        {/* Donuts */}
        <div className="flex items-center justify-center flex-col">
          <img className="h-[40px]" src={Dounats} alt="" />
          <span className="text-[15px]">Donuts</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
