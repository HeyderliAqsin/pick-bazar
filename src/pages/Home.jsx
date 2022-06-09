import React from "react";
import Cover from "../components/cover/Cover";
import Slider from "../components/slider/Slider";
import Basket from "../components/basket/Basket";
import ProductList from "../components/productlist/ProductList";
import LeftMenu from "../components/leftmenu/LeftMenu";
import "./Home.scss";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div id="Home">
      <div className="top">
        <Header className="header" />
        <Cover className="cover" />
      </div>
      <Slider />
      <Basket />
      <div
        className="d-flex"
        style={{
          backgroundColor: "#f3f4f6",
        }}
      >
        <LeftMenu />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
