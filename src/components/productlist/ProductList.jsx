import React from "react";
import "./ProductList.scss";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/actions/CartAction";

const ProductList = ({ loading, data }) => {
  const dispatch = useDispatch();
  const  {cartItems}=useSelector(state=>state.cart);
  console.log(cartItems)
  return (
    <>
      <section id="ProductList">
      {loading ? (
            <div className="products">
              <div className="row m-0">
                {data._mapperProduct.map((element) => (
                    <div className="col-lg-3 mb-2" key={element.id}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={element.photoUrl}
                          alt={element.name}
                          style={{height:"100%"}}
                        />
                        <div className="card-body">
                          <div className="text d-flex align-items-center mb-2">
                            {element.discount > 0 ? (
                              <div className="prices">
                                <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                                  ${element.price}
                                </del>
                                <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                                  ${element.discount} AZN
                                </p>
                              </div>
                            ) : (
                              <span>{element.price} AZN</span>
                            )}
                          </div>
                          <h3 className="title">{element.name}</h3>

                          <button
                            className="btns"
                            onClick={() => {
                              dispatch(ADD(element.id, 1));
                            }}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
           ) : (
            <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={5} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductList;
