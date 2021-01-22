import React from "react";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import "./basics.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Basics = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar basics={true} number={6} array={["contact"]} />
          </div>
          <div className="col-md-7">
            <h4>Tell us about your business</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>

            <form action="/details">
              <hr className="w-100" />
              <h6>
                <b>Victory Insulators Limited</b>
              </h6>
              <h6>HST: 12345 6789 RT0001</h6>

              <a className="btn bg-dark mb-5">
                {
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="1x"
                    color="black"
                  />
                }
                <span className="pl-2 text-white">
                  Add a accredication / certification
                </span>
              </a>

              <h6>Business Address</h6>
              <input
                className="width-full mb-2"
                placeholder="Address line 1"
                required
              />
              <input
                className="width-full mb-2"
                placeholder="Address line 2"
                required
              />
              <input className="width-full mb-2" placeholder="City" required />
              <br />
              <input className="width-half" placeholder="Postcode" required />
              <input
                className="width-half ml-1"
                placeholder="Province"
                required
              />
              <br />

              <a className="btn mb-4">
                <FontAwesomeIcon icon={faPlus} size="1x" color="black" />
                <span className="ml-2">Add another business location</span>
              </a>

              <h6>Business phone number</h6>
              <input
                className="width-full mb-4"
                placeholder="Phone number"
                required
              />

              <h6>Website</h6>
              <input
                className="width-full mb-4"
                placeholder="Website address"
                required
              />

              <div className="row width-full">
                <input
                  className="btn col-4 backButton"
                  type="submit"
                  value="BACK"
                />
                <input
                  className="btn col-4 nextButton text-white ml-auto"
                  type="submit"
                  value="NEXT"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
