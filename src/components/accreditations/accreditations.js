import React from "react";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import './accreditations.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


export const Accreditations = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar accreditations={true} number={2} 
            array={['contact', 'basics', 'details', 'areasServed', 'services']} />
          </div>
          <div className="col-md-7">
            <h4>Tell us about your accreditation / certifications</h4>
            <h6>
              Upload copies of your accreditations / certifications. These will
              be displayed on your listing to give your potential customers a
              sense of your capabilities.
            </h6>

            <hr />

            <a className="btn bg-dark">
              <FontAwesomeIcon icon={faCloudUploadAlt} color="black"/>
              <span className="text-white ml-2">Add a accredication / certification</span>
            </a>

            <div className="row margin-top1">
                <NavLink className="btn text-dark" to="/servicesOffered">BACK</NavLink>
                <NavLink className="btn nextButton text-white ml-auto" to="/accreditations_next">SKIP</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
