import React, { useEffect, useState } from "react";
import Cover from "../components/cover/Cover";
import Slider from "../components/slider/Slider";
import Basket from "../components/basket/Basket";
import ProductList from "../components/productlist/ProductList";
import LeftMenu from "../components/leftmenu/LeftMenu";
import "./Home.scss";
import Header from "../components/header/Header";
import { BASE_URL } from "../api/ApiConfig";

const Home = () => {
  const [products,setProducts]=useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProductList = () => {
      fetch(`${BASE_URL}/api/Product`)
        .then((c) => c.json())
        .then((c) => {
          setProducts(c);
          setLoading(true);
        });
    };
    getProductList();
  }, []);
  
  return (
    <div id="Home">
      <div className="top">
        <Header className="header" />
        <Cover className="cover" />
      </div>
      <Slider />
      {/* <Basket /> */}
      <div
        className="d-flex"
        style={{
          backgroundColor: "#f3f4f6",
        }}
      >
        <LeftMenu />
        <ProductList data={products} loading={loading}/>
      </div>
    </div>
  );
};

export default Home;
