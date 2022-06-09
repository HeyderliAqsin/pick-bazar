import React, { useEffect, useRef, useState } from "react";
import "./Offers.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Offers = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const [copy, setCopied] = useState(false);
  var text = useRef();

  useEffect(() => {
    text.current.focus();
    var coupon = text.current.innerText;
    setValue(coupon);
  }, [value]);

  return (
    <section id="Offers">
      <div className="coupon-card">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/2x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span
                  class="text-heading"
                  ref={text}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  EID2
                </span>
                <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                  <button class="copy" value={value} onClick={(e)=>e.target.value}>
                    <span>
                      {copy ? (
                        <span style={{ textTransform: "capitalize" }}>
                          Copied!
                        </span>
                      ) : (
                        <span>Copy</span>
                      )}
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/4x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span
                  class="text-heading"
                  ref={text}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  EID245  
                </span>
                <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                  <button class="copy">
                    <span>
                      {" "}
                      {copy ? (
                        <span style={{ textTransform: "capitalize" }}>
                          Copied!
                        </span>
                      ) : (
                        <span>Copy</span>
                      )}
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/5x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/8x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/10x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/12x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID22</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/15x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/18x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID28</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/6x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <img
                className="img-fluid"
                src="/images/20x2x-thumbnail.webp"
                alt=""
              />
              <div className="coupon-code">
                <span class="text-heading">EID2</span>
                <button class="copy">
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
