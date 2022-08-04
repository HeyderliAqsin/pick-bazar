import React from "react";
import { Link } from "react-router-dom";
import "./Shops.scss";
const Shops = () => {
  return (
    <>
      <section id="Shop">
        {/* <hr /> */}
        <div className="shops">
          <div className="container">
            <h3>All Shops</h3>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/Furniture-thumbnail (1).webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Furniture Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/Backpack-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Bags Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            4885  Spring Street, Illinois, Lincoln, 62656, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/bakery-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Bakery Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/Publisher-logo-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Books Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/Group-36321-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Grocery Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/Makeup-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Makeup Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="category-item">
                  <Link to="/">
                    <div className="photo d-flex">
                      <img
                        width={70}
                        src="/images/fashion-thumbnail.webp"
                        alt=""
                      />
                      <div className="text">
                        <p class="text m-0">Clothing Shop</p>
                        <div className="location d-flex">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>
                            {" "}
                            588 Finwood Road, New Jersey, East Dover, 08753, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
