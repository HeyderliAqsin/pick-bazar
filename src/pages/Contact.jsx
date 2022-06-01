import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="leftSide">
              <img src="/images/contact-illustration (1).svg" alt="" />
              <div class="address">
                <span class="mb-3 text-first">Address</span>
                <span class="text-loc">NY, United States</span>
              </div>
              <div class="address">
                <span class="mb-3 text-first">Phone</span>
                <span class="text-loc">+129290122122</span>
              </div>
              <div class="address">
                <span class="mb-3 text-first">Website</span>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="text-loc">https://redq.io</span>
                  <a
                    href="https://redq.io"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm font-semibold text-accent hover:text-accent-hover focus:text-blue-500 focus:outline-none"
                  >
                    Visit This Site
                  </a>
                </div>
              </div>
              <div class="address">
                <span class="mb-4 text-first">Follow Us</span>
                <div class="down d-flex align-items-center justify-content-start">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      class="w-4 h-4"
                      width={15}
                      height={15}
                    >
                      <path
                        data-name="_ionicons_svg_logo-facebook (6)"
                        d="M11.338 0H.662A.663.663 0 000 .663v10.674a.663.663 0 00.662.662H6V7.25H4.566V5.5H6V4.206a2.28 2.28 0 012.459-2.394c.662 0 1.375.05 1.541.072V3.5H8.9c-.753 0-.9.356-.9.881V5.5h1.794L9.56 7.25H8V12h3.338a.663.663 0 00.662-.663V.662A.663.663 0 0011.338 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noreferrer"
                    class="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14.747 12"
                      class="w-4 h-4"
                      width={15}
                      height={15}
                    >
                      <path
                        data-name="_ionicons_svg_logo-twitter (5)"
                        d="M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                  >
                    <svg
                      data-name="Group 96"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      class="w-4 h-4"
                      width={15}
                      height={15}
                    >
                      <path
                        data-name="Path 1"
                        d="M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z"
                        fill="currentColor"
                      ></path>
                      <path
                        data-name="Path 2"
                        d="M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="rightSide">
              <h1 class="text-head">Questions, Comments, Or Concerns?</h1>
              <div className="info d-flex">
                <Form.Group
                  className="mb-3 "
                  controlId="formBasicName"
                  style={{ width: "50%" }}
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="Name" style={{ height: "50px" }} />
                </Form.Group>
                <Form.Group
                  className="mb-3 ms-4"
                  controlId="formBasicEmail"
                  style={{ width: "50%" }}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="Email" style={{ height: "50px" }} />
                </Form.Group>
              </div>
              <div className="info-subject">
                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="Subject" style={{ height: "50px" }} />
                </Form.Group>
              </div>
              <div className="comment mb-4">
                <Form.Label>Description</Form.Label>
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </div>
              <button class="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
