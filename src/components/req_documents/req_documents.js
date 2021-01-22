import React from "react";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import "./req_documents.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Required_Documents = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar number={1}
              req_documents={true}
              array={[
                "contact",
                "basics",
                "details",
                "areasServed",
                "services",
                "accreditation",
              ]}
            />
          </div>
          <div className="col-md-6">
            <h5 className="mb-4">Required documents</h5>
            <h6>
              To complete your application, you are required to provide copies
              of the following documents:
            </h6>

            <hr />

            <h5>Proof of Insurance</h5>
            <p>
              To join the Efficiency Partner Network, you will need to{" "}
              <div className="text-green">
                request a certificate of insurance
              </div>{" "}
              from your insurance agent showing the following:
            </p>
            <div>
              <p className="mb-0">
                <b>Occurrence based Commercial General Liability Insurance</b>
                (including products and completed operations coverage with:
              </p>
              <li>
                limits of not less than $1,000,000 per occurrence for bodily
                injury and property damage liability, with an annual aggregate
                limit of not less than $1,000,000
              </li>
              <li>
                Efficiency Nova Scotia must be specifically named as an
                Additional Insured
              </li>
            </div>

            <h6 className="mt-4">
              <b>Comprehensive Auto Liability Insurance</b> which has minimum
              combined single limits for bodily injury and property damage of
              $1,000,000 per accident. The Comprehensive Auto Liability policy
              shall include owned and blanket non-owned and hired coverage.
            </h6>

            <b>Provincial-required worker’s compensation insurance</b>
            <br />

            <a className="btn bg-dark mt-4">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              <span className="text-white ml-2">Upload proof of insurance</span>
            </a>

            <hr className="mt-4" />

            <h5>Worker’s Compensation Clearance Letter</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <a className="btn bg-dark mt-4">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              <span className="text-white ml-2">Upload clearance letter</span>
            </a>

            <div className="row mt-5">
              <NavLink className="btn text-dark" to="/accreditations_next">
                BACK
              </NavLink>
              <NavLink
                className="btn nextButton text-white ml-auto"
                to="/finish_application"
              >
                NEXT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
