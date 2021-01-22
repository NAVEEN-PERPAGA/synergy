import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import "./areasServed.css";

export const AreasServed = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar areasServed={true} number={4} array={['contact', 'basics', 'details']} />
          </div>
          <div className="col-md-7">
            <h4>Tell us about your business</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>

            <hr className="w-100" />

            <h6>Select all counties which your business serves:</h6>

            <div className="row">
              <div className="col-md-6 large-checkbox">
                <input type="checkbox" />
                <span>Annapolis</span>
                <br />
                <input type="checkbox" />
                <span>Antigonish</span>
                <br />
                <input type="checkbox" />
                <span>Cape Breton</span>
                <br />
                <input type="checkbox" />
                <span>Colchester</span>
                <br />
                <input type="checkbox" />
                <span>Cumberland</span>
                <br />
                <input type="checkbox" />
                <span>Digby</span>
                <br />
                <input type="checkbox" />
                <span>Guysborough</span>
                <br />
                <input type="checkbox" />
                <span>Halifax</span>
                <br />
                <input type="checkbox" />
                <span>Hants</span>
              </div>

              <div className="col-md-6 large-checkbox">
                <input type="checkbox" />
                <span>Inverness</span>
                <br />
                <input type="checkbox" />
                <span>Kings</span>
                <br />
                <input type="checkbox" />
                <span>Lunenburg</span>
                <br />
                <input type="checkbox" />
                <span>Pictou</span>
                <br />
                <input type="checkbox" />
                <span>Queens</span>
                <br />
                <input type="checkbox" />
                <span>Richmond</span>
                <br />
                <input type="checkbox" />
                <span>Shelburne</span>
                <br />
                <input type="checkbox" />
                <span>Victoria</span>
                <br />
                <input type="checkbox" />
                <span>Yarmouth</span>
              </div>
            </div>

            <div className="row mt-4">
                <NavLink className="btn text-dark" to="/details">BACK</NavLink>
                <NavLink className="btn nextButton text-white ml-auto" to="/servicesOffered">NEXT</NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
