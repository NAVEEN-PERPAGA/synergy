import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import "./details.css";

export const Details = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-md-3 verticalLine">
            <Sidebar details={true} number={5} array={["contact", "basics"]} />
          </div>
          <div className="col-md-7">
            <h4>Tell us about your business</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>

            <hr className="w-100" />

            <form action="/areasServed">
              <h6>Business type</h6>
              <div className="row ">
                <div className="col-3">
                  <div className="square-box">Contractor</div>
                  <div className="square-box-checkbox">
                    <input type="checkbox" required/>
                  </div>
                </div>
                <div className="col-3 ml-2">
                  <div className="square-box">Distributor</div>
                  <div className="square-box-checkbox">
                    <input type="checkbox" required/>
                  </div>
                </div>
                <div className="col-3 ml-2">
                  <div className="square-box">
                    Consulting <br />
                    Engineer
                  </div>
                  <div className="square-box-checkbox">
                    <input type="checkbox" required/>
                  </div>
                </div>
              </div>

              <h6 className="margin-top">Service type</h6>
              <div className="row">
                <div className="col-3">
                  <div className="rectangular-box">Residential</div>
                  <div className="rectangular-box-checkbox">
                    <input type="checkbox" required/>
                  </div>
                </div>
                <div className="col-3 ml-5">
                  <div className="rectangular-box">Commercial</div>
                  <div className="rectangular-box-checkbox">
                    <input type="checkbox" required/>
                  </div>
                </div>
              </div>

              <div className="row mt-5 ml-1">
                <div>Description</div>
                <div className="ml-auto mr-3 light-text">
                  150 characters left
                </div>
              </div>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Be clear and descriptive"
                required
              />

              <h6 className="mt-4">Date business founded</h6>
              <div className="row ml-1">
                <div className="dropdown">
                  <a className="btn btn-light dropdown-toggle" role="button">
                    14
                  </a>
                </div>
                <div className="dropdown ml-2">
                  <a className="btn btn-light dropdown-toggle">June</a>
                </div>
                <div className="dropdown ml-2">
                  <a className="btn btn-light dropdown-toggle">2021</a>
                </div>
              </div>

              <h6 className="mt-4">Number of full-time employees</h6>
              <div className="dropdown">
                <a className="btn btn-light dropdown-toggle">
                  <span className="light-text">Select</span>
                </a>
              </div>

              <h6 className="mt-4">Operating Hours</h6>
              <div className="row ml-1">
                <input className="col-2" placeholder="Mon" required/>
                <input className="col-2 ml-1" placeholder="9:00am" required/>
                <input className="col-2 ml-1" placeholder="5:00pm" required/>
                <a className="btn">ADD HOURS</a>
              </div>

              <h6 className="mt-4">Do you provide free quotes / estimates?</h6>
              <div className="row ml-2">
                <input name="radio1" type="radio" required/>
                <p className="ml-2">Yes</p>
                <input className="ml-5" type="radio" name="radio1" required/>
                <p className="ml-2">No</p>
              </div>

              <h6 className="mt-4">Do you offer warranties / guarantees?</h6>
              <div className="row ml-2">
                <input type="radio" name="radio2" required/>
                <p className="ml-2">Yes</p>
                <input className="ml-5" type="radio" name="radio2" required/>
                <p className="ml-2">No</p>
              </div>

              <div className="row">
                <input
                  className="btn col-3 backButton"
                  type="submit"
                  value="BACK"
                />
                <input
                  className="btn col-2 nextButton text-white ml-auto"
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
