import React, { useState } from "react";
import "./ProductList.scss";
import CardsData from "../CardsData"

const ProductList = () => {
  const [data,setData]=useState(CardsData)
  console.log(data)

  return (
    <>
      <section id="ProductList">
        <div className="products">
          <div className="row m-0">
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/Apples.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="" onClick={()=>this.props.addToCart()}>
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BabySpinach.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke=""
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/blueberries.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BrusselsSprouts.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/Apples.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BabySpinach.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/blueberries.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BrusselsSprouts.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <span className="text-sm md:text-base text-heading font-semibold">
                      $1.60
                    </span>
                    <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                      $2.00
                    </del>
                  </div>
                  <h3 className="title">Apples</h3>
                  <div className="d-flex btn-main">
                    <button className="btns-minus">
                      <span className="sr-only">minus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <div className=" num d-flex flex-1 align-items-center justify-content-center ">
                      1
                    </div>
                    <button className="btns-plus" title="">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
