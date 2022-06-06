import React, { useState } from "react";
import "./ProductList.scss";
import CardsData from "../CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/Action";

const ProductList = () => {
  const [data, setData] = useState(CardsData);
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <>
      <section id="ProductList">
        <div className="products">
          <div className="row m-0">
            {data.map((element, id) => {
              return (
                <div className="col-lg-3 mb-2" key={id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={element.imgdata}
                      alt=""
                    />
                    <div className="card-body">
                      <div className="text d-flex align-items-center mb-2">
                        <span className="text-sm md:text-base text-heading font-semibold">
                          ${element.price}
                        </span>
                        <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                          ${element.discount}
                        </del>
                      </div>
                      <h3 className="title">{element.rname}</h3>

                      <button
                        className="btns"
                        disabled={disable}
                        onClick={() => send(element)}
                        onChange={() => setDisable(true)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
