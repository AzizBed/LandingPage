import React from "react";
import Footer from "./Footer/Footer";
import "./Home.css";
import NavBar from "./NavBar/NavBar";


function LandingPage() {
  return (
    <div>
      <div>
        <NavBar />
        <section
          className="u-carousel u-slide u-block-1c51-1"
          id="carousel_af2d"
          data-interval={5000}
          data-u-ride="carousel"
        >
          <ol className="u-absolute-hcenter u-carousel-indicators u-block-1c51-2">
            <li
              data-u-target="#carousel_af2d"
              data-u-slide-to={0}
              className="u-active u-grey-30"
            />
            <li
              data-u-target="#carousel_af2d"
              className="u-grey-30"
              data-u-slide-to={1}
            />
            <li
              data-u-target="#carousel_af2d"
              className="u-grey-30"
              data-u-slide-to={2}
            />
            <li
              data-u-target="#carousel_af2d"
              className="u-grey-30"
              data-u-slide-to={3}
            />
          </ol>
          <div className="u-carousel-inner" role="listbox">
            <div className="u-active u-carousel-item u-clearfix u-image u-section-1-1">
              <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-center-lg u-align-center-sm u-align-center-xl u-align-center-xs u-container-style u-group u-group-1">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs">
                    <img
                      src="images/logo.png"
                      alt="LandScape"
                      className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-contain u-image-default u-image-1"
                      data-image-width={429}
                      data-image-height={313}
                    />
                    <h3 className="u-align-center-md u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">
                      We Are Travel Agency
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="u-align-center u-carousel-item u-clearfix u-image u-shading u-section-1-2"
              src
              data-image-width={150}
              data-image-height={99}
            >
              <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <p className="u-large-text u-text u-text-default u-text-variant u-text-1">
                  Not All who wander Are&nbsp;
                </p>
                <h1 className="u-text u-text-default u-title u-text-2">
                  LOST...
                </h1>
                <a
                  href=" "
                  className="u-btn u-button-style u-palette-2-base u-btn-1"
                >
                  Read More
                </a>
              </div>
            </div>
            <div
              className="u-align-center u-carousel-item u-clearfix u-image u-shading u-section-1-3"
              src
              data-image-width={1280}
              data-image-height={853}
            >
              <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h1 className="u-text u-text-default u-title u-text-1">
                  INTUITIVE
                </h1>
                <p className="u-large-text u-text u-text-default u-text-variant u-text-2">
                  Sample text. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <a
                  href=" "
                  className="u-btn u-button-style u-palette-2-base u-btn-1"
                >
                  Read More
                </a>
              </div>
            </div>
            <div
              className="u-align-center u-carousel-item u-clearfix u-image u-shading u-section-1-4"
              src
              data-image-width={1280}
              data-image-height={720}
            >
              <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h1 className="u-text u-text-default u-title u-text-1">
                  INTUITIVE
                </h1>
                <p className="u-large-text u-text u-text-default u-text-variant u-text-2">
                  Sample text. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <a
                  href=" "
                  className="u-btn u-button-style u-palette-2-base u-btn-1"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-text-grey-30 u-block-1c51-3"
            href="#carousel_af2d"
            role="button"
            data-u-slide="prev"
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 477.175 477.175">
                <path
                  d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-grey-30 u-block-1c51-4"
            href="#carousel_af2d"
            role="button"
            data-u-slide="next"
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 477.175 477.175">
                <path
                  d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                />
              </svg>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </section>
        <section
          className="u-clearfix u-image u-shading u-section-2"
          id="carousel_1154"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-align-right u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-1">
                    <div className="u-container-layout u-valign-middle-xs">
                      <img
                        src="images/Untitled23.png"
                        alt="LandScape"
                        className="u-image u-image-contain u-image-default u-image-1"
                        data-image-width={246}
                        data-image-height={500}
                      />
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">
                        Choose The Travel Experts
                      </h2>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-left-cell u-opacity u-opacity-40 u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <p className="u-text u-text-body-alt-color u-text-2">
                        At Mountain Home Charter Service Inc., our number one
                        concern is customer satisfaction. We believe this can
                        only be accomplished by providing superior service,
                        quality lines, and competitive pricing. <br />
                        <br />
                        We are a nationwide charter service that serves
                        Springfield, Branson and the surrounding areas with late
                        model MCI Luxury Motorcoaches. Our fine buses boast a 54
                        to 56 passenger capacity, are equipped with restrooms
                        and feature DVD players and monitors.
                      </p>
                      <a
                        href="https://nicepage.com/c/product-list-html-templates"
                        className="u-btn u-button-style u-custom-font u-font-ubuntu u-white u-btn-1"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="u-clearfix u-image u-shading u-section-3"
          id="carousel_361b"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-gutter-20 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                    <div className="u-container-layout">
                      <img
                        className="u-expanded-width u-image u-image-1"
                        src="images/pexelsphoto1624504.jpeg"
                      />
                      <h6 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">
                        Missioners Group
                      </h6>
                      <p className="u-text u-text-body-alt-color u-text-2">
                        We offer a full range of travel services to church
                        groups , humanitarian agencies, and missionary
                        organizations.
                      </p>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                    <div className="u-container-layout">
                      <img
                        className="u-expanded-width u-image u-image-2"
                        src="images/pexelsphoto934718.jpeg"
                        alt="LandScape"
                      />
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-3">
                        What
                        <br />
                        We Do
                      </h2>
                      <h6 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-4">
                        Leisure Travel
                      </h6>
                      <p className="u-text u-text-body-alt-color u-text-5">
                        We take the stress and frustration out of planning your
                        vacation.
                      </p>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                    <div className="u-container-layout">
                      <img
                        className="u-expanded-width u-image u-image-3"
                        src="images/pexelsphoto167684.jpeg"
                      />
                      <h6 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-6">
                        Corporate Travel
                      </h6>
                      <p className="u-text u-text-body-alt-color u-text-7">
                        We offer a full array of corporate travel options with
                        personalized service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="u-clearfix u-palette-1-light-2 u-section-4"
          id="sec-033c"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-1">
                        How Travel
                        <br />
                        Leaders Works
                      </h2>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <p className="u-text u-text-2">
                        We are the largest and most celebrated network of
                        professional travel agents in North America. Wherever
                        you want to go, however you want to get there, whatever
                        you want to do???we have the ideal travel agent match just
                        for you.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="u-clearfix u-image u-shading u-section-5"
          id="carousel_7bb5"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-align-right u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">
                        Why Choose Discount Trip Source?
                      </h2>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <p className="u-text u-text-2">
                        Sample text. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit nullam nunc justo We go the EXTRA MILE
                        for our clients. We research in depth to make sure there
                        is ???no stone left unturned."&nbsp;Giving our customers
                        the best available fares possible.
                        <br />
                        <br />
                        &nbsp; We want to make sure every client's trip is
                        nothing short of perfect.Technology has changed the way
                        the traveling public shops for travel. We feel
                        personalized service is the utmost important factor in
                        planning travel. Something the internet cannot possibly
                        give. We work hard to maintain our 99% customer
                        satisfaction.suscipit ultrices.
                      </p>
                      <a
                        href="https://nicepage.com/k/offer-html-templates"
                        className="u-btn u-button-style u-white u-btn-1"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-black u-clearfix u-section-6" id="carousel_cace">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-opacity u-opacity-40 u-size-30 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <p className="u-text u-text-body-alt-color u-text-1">
                        At Mountain Home Charter Service Inc., we are committed
                        to business integrity and honesty through hard work,
                        organization, cleanliness, courtesy, and communication.
                        Our entire team works hard to exceed all customer
                        expectations. Please give us a call today for more
                        information on the services we offer. We are more than
                        happy to help in any way possible.
                        <br />
                        <br />
                        At<b>&nbsp;Mountain Home Charter Service Inc.</b>, our
                        number one concern is customer satisfaction. We believe
                        this can only be accomplished by providing superior
                        service, quality lines, and competitive pricing.
                        <br />
                      </p>
                      <a
                        href="https://nicepage.com/c/shapes-website-templates"
                        className="u-btn u-button-style u-custom-font u-font-ubuntu u-white u-btn-1"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-valign-middle-sm">
                      <img
                        src="images/Untitled2.png"
                        alt="LandScape"
                        className="u-image u-image-contain u-image-default u-image-1"
                      />
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-2">
                        We Have Over 24 Years of Travel Experience
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-clearfix u-image u-section-7" id="carousel_8a29">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-opacity u-opacity-40 u-size-30 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-white u-text-1">
                        Ask us a question
                      </h2>
                      <div className="u-form u-form-1">
                        <form
                          action=" "
                          method="POST"
                          className="u-block-980f-8 u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                          source="custom"
                        >
                          {/* hidden inputs for siteId and pageId */}
                          <div className="u-form-group u-form-name">
                            <label
                              htmlFor="name-bd75"
                              className="u-form-control-hidden u-label"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your Name"
                              id="name-bd75"
                              name="name"
                              className="u-border-1 u-border-white u-input u-input-rectangle u-text-body-alt-color"
                              required
                            />
                          </div>
                          {/* always visible */}
                          <div className="u-form-email u-form-group">
                            <label
                              htmlFor="email-bd75"
                              className="u-form-control-hidden u-label"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              placeholder="Enter a valid email address"
                              id="email-bd75"
                              name="email"
                              className="u-border-1 u-border-white u-input u-input-rectangle u-text-body-alt-color"
                              required
                            />
                          </div>
                          <div className="u-form-group u-form-message">
                            <label
                              htmlFor="message-bd75"
                              className="u-form-control-hidden u-label"
                            >
                              Message
                            </label>
                            <textarea
                              placeholder="Enter your message"
                              rows={4}
                              cols={50}
                              id="message-bd75"
                              name="message"
                              className="u-border-1 u-border-white u-input u-input-rectangle u-text-body-alt-color"
                              required
                              defaultValue={" "}
                            />
                          </div>
                          <div className="u-form-group u-form-submit">
                            <a
                              href=" "
                              className="u-btn u-btn-submit u-button-style u-white u-btn-1"
                            >
                              Submit
                            </a>
                            <input
                              type="submit"
                              defaultValue="submit"
                              className="u-border-white u-form-control-hidden"
                            />
                          </div>
                          <div className="u-form-send-message u-form-send-success">
                            {" "}
                            Thank you! Your message has been sent.{" "}
                          </div>
                          <div className="u-form-send-error u-form-send-message">
                            {" "}
                            Unable to send your message. Please fix errors then
                            try again.{" "}
                          </div>
                          <input
                            type="hidden"
                            defaultValue
                            name="recaptchaResponse"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="u-align-right u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-1">
                    <div className="u-container-layout u-container-layout-2">
                      <h2 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-2">
                        Contact Us
                      </h2>
                      <p className="u-text u-text-body-alt-color u-text-3">
                        &nbsp;Katapola, Amorgos 84008, Greece&nbsp;
                        <br />
                        +30 22850 71554,
                        <br />
                        +30 22850 71554&nbsp;
                        <br />
                        info@adventure.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        
      </div>
    </div>
  );
}

export default LandingPage;
