import React from "react";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <>
      <section id="ProductList">
          <div className="products">
            <div className="row m-0">
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/Apples.webp"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/Apples.webp"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/Apples.webp"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/Apples.webp"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Go somewhere</a>
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
