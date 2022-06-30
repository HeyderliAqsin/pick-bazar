import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./basket.scss";
import { useDispatch, useSelector } from "react-redux";
// import { DELETE, REMOVE } from "../../redux/actions/CartAction";
import { ADD } from "../../redux/actions/CartAction";
import { Fade } from "react-reveal";

const Basket = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const getdata = useSelector((state) => state.cartreducer.cartItems);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  // const rmv = (id) => {
  //   dispatch(DELETE(id));
  // };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = newFunction(getdata, setPrice);

  function newFunction(getdata, setPrice) {
    return () => {
      let price = 0;
      getdata.map((ele, k) => {
        return (price = ele.price * ele.quantity + price);
      });
      setPrice(price);
    };
  }

  useEffect(() => {
    total();
  }, [total]);

  const send = (e) => {
    dispatch(ADD(e));
  };
  // const remove = (item) => {
  //   dispatch(REMOVE(item));
  // };

  return (
    <>
      <button className="basket" onClick={handleShow}>
        {name}
        <span className="d-flex pb-1">
          <svg
            width="14"
            height="16"
            className="shrink-0"
            viewBox="0 0 12.686 16"
          >
            <g transform="translate(-27.023 -2)">
              <g transform="translate(27.023 5.156)">
                <g>
                  <path
                    d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                    transform="translate(-53.023 -101.005)"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
              <g transform="translate(30.274 2)">
                <g>
                  <path
                    d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                    transform="translate(-157.039)"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="items">
            {getdata.length} {getdata.length > 1 ? "Items" : "Item"}
          </span>
        </span>
        <div className="total">
          <span className="text-count">${price}</span>
        </div>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <Offcanvas.Title className="canvas">
            <span className="d-flex align-items-center pb-1">
              <svg
                width="22"
                height="22"
                className="shrink-0"
                viewBox="0 0 12.686 16"
              >
                <g transform="translate(-27.023 -2)">
                  <g transform="translate(27.023 5.156)">
                    <g>
                      <path
                        d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                        transform="translate(-53.023 -101.005)"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                  <g transform="translate(30.274 2)">
                    <g>
                      <path
                        d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                        transform="translate(-157.039)"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="items">{getdata.length} Items</span>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {getdata.length ? (
            <div className="basket-body">
              {getdata.map((e, id) => {
                return (
                  <Fade left cascade>
                    <div
                      className="products d-flex align-items-center justify-content-between"
                      key={id}
                    >
                      <button className="basket-count">
                        <div className="plus" onClick={() => send(e)}>
                          +
                        </div>
                        <div className="count">{e.quantity}</div>
                        {/* <div
                          className="minus"
                          onClick={
                            e.quantity <= 1 ? () => rmv(e.id) : () => remove(e)
                          }
                        >
                          -
                        </div> */}
                      </button>
                      <div className="photo">
                        <img width={60} src={e.imgdata} alt="" />
                      </div>
                      <div className="info">
                        <span className="product-name">{e.rname}</span>
                        <span className="product-price">${e.price}</span>
                        <span className="">{e.quantity}</span>
                      </div>
                      <div className="total">
                        <span>${e.price * e.quantity}</span>
                      </div>
                      {/* <div className="close" onClick={() => rmv(e.id)}>
                        <i className="fas fa-close"></i>
                      </div> */}
                    </div>
                  </Fade>
                );
              })}
            </div>
          ) : (
            <div className="empty">
              <svg width="140" height="176" viewBox="0 0 231.91 292">
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="1"
                    y1="0.439"
                    x2="0.369"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#029477"></stop>
                    <stop offset="1" stop-color="#009e7f"></stop>
                  </linearGradient>
                </defs>
                <g
                  id="no_cart_in_bag_2"
                  data-name="no cart in bag 2"
                  transform="translate(-1388 -351)"
                >
                  <ellipse
                    id="Ellipse_2873"
                    data-name="Ellipse 2873"
                    cx="115.955"
                    cy="27.366"
                    rx="115.955"
                    ry="27.366"
                    transform="translate(1388 588.268)"
                    fill="#ddd"
                    opacity="0.25"
                  ></ellipse>
                  <path
                    id="Path_18691"
                    data-name="Path 18691"
                    d="M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z"
                    transform="translate(1403 381)"
                    fill="#009e7f"
                  ></path>
                  <path
                    id="Rectangle_1852"
                    data-name="Rectangle 1852"
                    d="M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z"
                    transform="translate(1403 381)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Rectangle_1853"
                    data-name="Rectangle 1853"
                    d="M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z"
                    transform="translate(1403 381)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18685"
                    data-name="Path 18685"
                    d="M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z"
                    transform="translate(1056.69 164.944)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18686"
                    data-name="Path 18686"
                    d="M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z"
                    transform="translate(1057.793 95.684)"
                    fill="#009e7f"
                  ></path>
                  <circle
                    id="Ellipse_2874"
                    data-name="Ellipse 2874"
                    cx="28.689"
                    cy="28.689"
                    r="28.689"
                    transform="translate(1473.823 511.046)"
                    fill="#006854"
                  ></circle>
                  <circle
                    id="Ellipse_2875"
                    data-name="Ellipse 2875"
                    cx="15.046"
                    cy="15.046"
                    r="15.046"
                    transform="translate(1481.401 547.854) rotate(-45)"
                    fill="#009e7f"
                  ></circle>
                  <path
                    id="Path_18687"
                    data-name="Path 18687"
                    d="M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z"
                    transform="translate(1060.579 -35.703)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18688"
                    data-name="Path 18688"
                    d="M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z"
                    transform="translate(1060.566 -35.704)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18689"
                    data-name="Path 18689"
                    d="M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z"
                    transform="translate(970.304 -35.704)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18690"
                    data-name="Path 18690"
                    d="M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z"
                    transform="translate(970.318 -35.703)"
                    fill="#006854"
                  ></path>
                  <path
                    id="Path_18692"
                    data-name="Path 18692"
                    d="M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z"
                    transform="translate(1292.301 101.536)"
                    fill="url(#linear-gradient)"
                  ></path>
                  <path
                    id="Path_18693"
                    data-name="Path 18693"
                    d="M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z"
                    transform="translate(1118.301 101.536)"
                    fill="url(#linear-gradient)"
                  ></path>
                </g>
              </svg>{" "}
              <h4>No products found</h4>
            </div>
          )}
          <footer className="fixed bottom-0 w-full bg-light">
            <button className="btn">
              <span className=" checkout d-flex flex-1 align-items-center h-full px-5 text-light">
                Checkout
              </span>
              <span className="total d-flex align-items-center shrink-0 h-full bg-light text-accent rounded-full px-5">
                ${price}
              </span>
            </button>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Basket;
