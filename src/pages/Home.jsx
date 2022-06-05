import React from "react";
import Cover from "../components/cover/Cover";
import Slider from "../components/slider/Slider";
import Basket from "../components/basket/Basket";
import SideBarMenu from "../components/sidebar/SideBarMenu";
import ProductList from "../components/productlist/ProductList";

const Home = () => {
  return (
    <div>
      <Cover />
      <Slider />
      <Basket />
      <div
        className="d-flex"
        style={{
          backgroundColor: "#f3f4f6",
        }}
      >
        <SideBarMenu />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
