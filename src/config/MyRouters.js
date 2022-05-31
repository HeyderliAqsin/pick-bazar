import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shops from "../pages/Shops";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Offers from "../pages/Offers";

const MyRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/offers" element={<Offers/>} />
    </Routes>
  );
};

export default MyRouters;
