import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white">
        <NavLink className="navbar-brand" to="/">
          <b>01Synergy</b>
        </NavLink>
        
      </nav>
      <div className="main">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Become an Efficiency Partner</h2>
            <h4 className="mb-3">
              Join our network of experts who work with Nova Scotian businesses
              to implement energy effciency solutions.
            </h4>
            <h6 className="mb-3">
              If you are a distributor, contractor, consulting engineer or other
              energy efficiency trade professional, you can submit your
              application online.
            </h6>
            <h6>
              You’ll need to include business and technical credentials to apply
              and complete a session on Efficiency Nova Scotia’s services and
              financial incentives.
            </h6>
            <br />

            <b>Your business is eligible if it:</b>
            <li>has been in operation for at least one year</li>
            <li>has an HST Registration Number</li>
            <li>is listed on the Registry of Joint Stocks</li>
            <li>has General and Auto Liability Insurance</li>
            <li>has Workers Compensation</li>
            <br />

            <b>What you’ll need:</b>
            <li>your HST number</li>
            <li>
              copies of trade certificates required to perform the services your
              company offers
            </li>
            <li>proof of insurance</li>
            <br />

            <h6>
              Once you start your application, you can continue at any time.
            </h6>
          </div>
          <form className="col-md-4 p-4 home-div-light" action="/contact">
            <h5 className="mb-4">
              <b>Join the Efficiency Partner Network</b>
            </h5>
            <input className="mb-3" placeholder="Email address" required/>
            <input placeholder="Password" required />
            <hr />
            <input className="mb-4" type="text" placeholder="Business Name" required />
            <input className="mb-4" placeholder="HST Registration Number" required />

            <div className="mb-4">
              <input type="checkbox" id="check1" required />
              &nbsp;
              <label for="check1">I agree to the Terms and Conditions</label>
            </div>

            <input
              className="btn homeButton text-white"
              type="submit"
              value="GET STARTED"              
            />
            
            <br />
            <br />
            <small>Already have an account? Sign in instead</small>
          </form>
        </div>
      </div>
    </>
  );
};
