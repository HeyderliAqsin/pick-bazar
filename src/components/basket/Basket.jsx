import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./basket.scss";

const Basket = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="basket" onClick={handleShow}>
        {name}
        <span class="d-flex pb-1">
          <svg width="14" height="16" class="shrink-0" viewBox="0 0 12.686 16">
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
          <span class="items">51 Items</span>
        </span>
        <div className="count">
          <span class="text-count">$1,957.67</span>
        </div>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="canvas">
            <span class="d-flex align-items-center pb-1">
              <svg
                width="22"
                height="22"
                class="shrink-0"
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
              <span class="items">51 Items</span>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Basket;
