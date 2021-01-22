import React from "react";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import "./servicesOffered.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const ServicesOffered = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar services={true} number={3} array={['contact', 'basics', 'details', 'areasServed']} />
          </div>
          <div className="col-md-7">
            <h4>Tell us about your business</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>

            <hr />

            <h6 className="mb-4">Which installation services do you offer?</h6>
            <div className="bg-light p-2 mb-2">
              Existing Home Upgrades
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>
            <div className="bg-light p-2 mb-2">
              Insulation
              <a className="btn float-right">
                <FontAwesomeIcon icon={faCheck} color="green" />
              </a>
            </div>
            <div className="bg-light p-2">
              <h6>HVAC</h6>
              <a className="btn float-right">
                <FontAwesomeIcon icon={faCheck} color="green" />
              </a>
              <div className="row">
                <div className="col-md-6 inner-inputs">
                  <input type="checkbox" />
                  <span>Gas boilers</span>
                  <br />
                  <input type="checkbox" />
                  <span>Gas fireplace</span>
                  <br />
                  <input type="checkbox" />
                  <span>Gas furnace</span>
                  <br />
                  <input type="checkbox" />
                  <span>Gas unit heater</span>
                  <br />
                  <input type="checkbox" />
                  <span>Geothermal heat</span>
                </div>
                <div className="col-md-6 inner-inputs">
                  <input type="checkbox" />
                  <span>Heat pump</span>
                  <br />
                  <input type="checkbox" />
                  <span>Wood / Pellet</span>
                  <br />
                  <input type="checkbox" />
                  <span>Oil furnace</span>
                  <br />
                  <input type="checkbox" />
                  <span>Oil boilers</span>
                </div>
                <br />
              </div>
            </div>

            <div className="bg-light p-2 mt-2">
              Water Heaters
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Agriculture products
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Compressed Air
              <a className="btn float-right">
                <FontAwesomeIcon icon={faCheck} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2 inner-inputs">
              <h6>HVAC</h6>
              <input type="checkbox"/>
              <span>Ground/water source heat pumps</span><br/>
              <input type="checkbox"/>
              <span>High efficiency air source heat pumps</span><br/>
              <input type="checkbox"/>
              <span>HVAC Hotel Occupancy Sensors</span><br/>
              <input type="checkbox"/>
              <span>Integrated Dual Enthalpy Economizer Controls</span><br/>
              <input type="checkbox"/>
              <span>Commercial Solar Space Heating</span>              
            </div>

            <div className="bg-light p-2 mt-2">
              Laundry Equipment
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Kitchen Equipment
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Refrigeration Equipment
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Lighting
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Motor and Variable Speed Drives
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Water Heating
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              IT and Datacenters
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <div className="bg-light p-2 mt-2">
              Pumping
              <a className="btn float-right">
                <FontAwesomeIcon icon={faPlus} color="black"/>
              </a>
            </div>

            <hr/>

            <h6>What products do you sell?</h6>

            <div className="row mt-4">
              <NavLink className="btn text-dark" to="/areasServed">BACK</NavLink>
              <NavLink className="btn nextButton ml-auto text-white" to="/accreditations">NEXT</NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
