import React from "react";
import "./Cover.scss";

export const Cover = () => {
  return (
    <>
      <div id="cover">
        <img src="/images/grocery.webp" alt="" />
        <div className="centerText">
          <h1>Groceries Delivered in 90 Minute</h1>
          <p class="text-sm lg:text-base xl:text-lg text-heading">
            Get your healthy foods &amp; snacks delivered at your doorsteps all
            day everyday
          </p>
          <div id="searchBox" class="input-group mb-3">
            <input
              id="search"
              type="text"
              class="form-control"
              placeholder="Search your product from here"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class="fas fa-search"></i>   
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
