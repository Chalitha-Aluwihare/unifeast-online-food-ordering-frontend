import React from "react";
import { foodData } from "../../testData/cart/Cart";
import Cart from '../../components/cart/Cart'
import PromoBanner from '../../components/promoBanner/PromoBanner'
import SearchBar from "../../components/searchBar/SearchBar"
import Header from "../../components/header/Header";

const Home = () => {
  return (
    // main div container
    <div>
        <Header />
    <div className="grid-cols-12 sm:grid">
      {/* navigation bar div container */}
      <div className="hidden col-span-1 sm:grid">
        <h1>Hi</h1>
      </div>
      {/* main page container ex promobanner, menu, search, bar */}
      <div className="col-span-12 sm:col-span-9">
        <div></div>
        <div>
            <PromoBanner />
        </div>
        <div className='flex items-start justify-center w-full'>
            {/* Render SearchBar only once */}
          <SearchBar sItem={foodData} />
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {foodData.map((food, index) => (
            <Cart key={food.id} item={food} />
          
          ))}
        </div>

      </div>
      {/* user testomonelas div container */}
      <div className="hidden col-span-2 sm:grid">
        <h1>Hi</h1>
      </div>
    </div>
    </div>
  );
};

export default Home;
