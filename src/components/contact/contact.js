import React from "react";
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from "../navbar/navbar";
import "./contact.css";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar contact={true} number={7} array={[]} />
          </div>
          <div className="col-md-7">
            <h4>Who should we contact about your application?</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <hr />

            <form action="/basics">
              <h6>Contact person</h6>
              <input className="width-half" placeholder="First Name" required />
              <input className="width-half ml-1" placeholder="Last Name" required />
              <h6 className="mt-4">Email address</h6>
              <input
                className="width-full"
                placeholder="john.doe@victoryinsulators.com"
                required
              />
              <br />
              <br />
              <input type="checkbox" required /> &nbsp;
              <span>
                <small>
                  Receive email communications from Efficiency Nova Scotia
                </small>
              </span>
              <h6 className="mt-4">Phone number</h6>
              <input className="width-full" placeholder="Phone number" required />
              <h6 className="mt-4">Mailing Address</h6>
              <input className="width-full mb-1" placeholder="Address line 1" required />
              &nbsp;
              <input className="width-full mb-1" placeholder="Address line 2" required />
              &nbsp;
              <input className="width-full mb-1" placeholder="City" required />
              <br />
              <input className="width-half" placeholder="Postcode" required />
              &nbsp;
              <input className="width-half" placeholder="Province" required />
              <br />
              <br />
              <div className="width-full">          
                <input
                  className="nextButton col-4 text-white float-right"
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
