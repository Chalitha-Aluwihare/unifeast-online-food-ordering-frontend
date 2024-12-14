import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
import RatingsDroupDown from "../../components/droupDown/RatingsDroupDown";
import PriceDroupDown from "../../components/droupDown/PriceDroupDown";
import OffersDroupDown from "../../components/droupDown/OffersDroupDown";
import Menu from "../../components/menu/Menu";

const SearchBar = ({ sItem }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilterItems] = useState(sItem);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = sItem.filter((sItem) =>
      sItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterItems(filteredItems);
  };

  return (
    <div className="w-full">
      <div className="mx-2">
        <input
          placeholder="Search for food items..."
          value={searchItem}
          onChange={handleInputChange}
          className="w-full p-[6px] my-3 bg-transparent sm:border-[3px] border-[2px] border-black rounded-lg outline-none appearance-none sm:p-2"
        />
        <div className="flex gap-3 mb-2">
          {/* <RatingsDroupDown />
          <PriceDroupDown />
          <OffersDroupDown /> */}
        </div>
        <div>
          <Menu />
        </div>
        {/* search results headline */}
        <div className="flex  leading-5 justify-between">
          <span className="text-black text-[20px] font-bold">
            Search Results
          </span>
          <button className="bg-gray-300 text-black py-1 px-3 rounded-full">Reset</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((food, index) => (
          <Cart key={food.id} item={food} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
