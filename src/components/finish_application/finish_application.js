import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { Sidebar_Last } from "../sidebar_last/sidebar_last";
import "./finish_application.css";

export const Finish_Application = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <br />
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar_Last
              finish_application={true}
              array={[
                "contact",
                "basics",
                "details",
                "areasServed",
                "services",
                "accreditation",
                "req_documents"
              ]}
            />
          </div>
          <div className="col-md-7">
            <h5 className="mb-4">Finish Application</h5>
            <p>
              Review the terms and conditions below, which apply to all
              Efficiency Nova Scotia Efficiency Partners and upon acceptance
              into the Efficiency Partner Network, the Applicant agrees to
              accept and comply with all of the following:
            </p>

            <hr className="w-100" />

            <div className="scrollable">
              <p>
                1. The Applicant’s approval for a particular program will be
                effective as of the date of an Application Approval Notice and
                the Applicant will be subject to these terms and conditions and
                all program-specific terms and conditions for participation.
                Effciency Partner approval for each program will be effective
                for a term of one year from the date of the program's
                Application Approval Notice, and will subsequently automatically
                renew each year on the anniversary of such Application Approval
                Notice for additional one year periods, unless otherwise
                suspended or terminated in accordance with these terms and
                conditions, or any program-specific terms and conditions.
              </p>
              <p>
                2. Once approved as an Effciency Partner, the Applicant may be
                listed on Effciency Nova Scotia’s website as a participating
                Effciency Partner.
              </p>
              <p>
                3. Effciency Nova Scotia is a franchise operated by
                EfficiencyOne, offcial Licensee of the Province of Nova Scotia.
                By providing consent the Applicant agrees to release personal
                information to the current and successive holders of the
                Effciency Nova Scotia franchise.
              </p>
              <p>
                4. Efficiency Nova Scotia will provide the Applicant with
                informational training materials, and additional training as
                required by each Efficiency Nova Scotia service for which the
                Applicant has been approved.
              </p>
            </div>

            <div className="row mt-5">
              <NavLink className="btn text-dark" to="/required_documents">
                BACK
              </NavLink>
              <NavLink
                className="btn submitButton text-white ml-auto"
                to="/efficiency_expert"
              >
                SUBMIT APPLICATION
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
