import React from "react";
import { NavLink } from "react-router-dom";
import "./efficiency_expert.css";

export const EfficiencyExpert = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white">
        <NavLink className="navbar-brand" to="/">
          <b>01Synergy</b>
        </NavLink>
      </nav>
      <div className="main text-center">
        <h1>Find an Efficiency Expert</h1>
        <h2 className="mt-5">I’m looking for a</h2>

        <div className="row content-center mt-4">
          <div className="blocks">Contractor</div>
          <div className="blocks">Distributor</div>
          <div className="blocks">
            Consulting <br />
            Engineer
          </div>
        </div>

        <p className="w-50">
          By continuing you acknowledge that the Efficiency Partner Network
          listings are independent businesses that are solely responsible for
          the performance and quality of their work. Efficiency Nova Scotia does
          not guarantee and is not responsible for any work performed by these
          businesses.
        </p>
      </div>
    </>
  );
};
