import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = (props) => {
  return (
    <>
      <div className="sidebar">
        <ul>

          {props.contact ? (
            <li>
              <NavLink className="btn p-0 color" to="/contact">
                <b>Contact information</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/contact">
                Contact information
              </NavLink>
              {props.array.includes("contact") ? (
                <div className="float-right">
                <FontAwesomeIcon
                  
                  icon={faCheck}
                  color="green"
                />
                </div>
              ) : (
                ""
              )}
            </li>
          )}

          <li className="text-dark">
            <b>Business listing</b>
          </li>

          {props.basics ? (
            <li>
              <NavLink className="btn p-0 color" to="/basics">
                <b>Basics</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/basics">
                Basics
              </NavLink>
              {props.array.includes("basics") ? (
                <FontAwesomeIcon
                  className="float-right"
                  icon={faCheck}
                  color="green"
                />
              ) : (
                ""
              )}
            </li>
          )}  

          {props.details ? (
            <li>
              <NavLink className="btn p-0 color" to="/details">
                <b>Details</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/details">
                Details
              </NavLink>
              {props.array.includes("details") ? (
                <FontAwesomeIcon
                  className="float-right"
                  icon={faCheck}
                  color="green"
                />
              ) : (
                ""
              )}
            </li>
          )}  

          {props.areasServed ? (
            <li>
              <NavLink className="btn p-0 color" to="/areasServed">
                <b>Areas Served</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/areasServed">
                Areas Served
              </NavLink>
              {props.array.includes("areasServed") ? (
                <FontAwesomeIcon
                  className="float-right"
                  icon={faCheck}
                  color="green"
                />
              ) : (
                ""
              )}
            </li>
          )}  

          {props.services ? (
            <li>
              <NavLink className="btn p-0 color" to="/servicesOffered">
                <b>Services offered</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/servicesOffered">
                Services offered
              </NavLink>
              {props.array.includes("services") ? (
                <FontAwesomeIcon
                  className="float-right"
                  icon={faCheck}
                  color="green"
                />
              ) : (
                ""
              )}
            </li>
          )}

          <li className="text-dark">
            <b>Documentation</b>
          </li>

          {props.accreditations ? (
            <li>
              <NavLink className="btn p-0 color" to="/accreditations">
                <b>Accreditations & Certifications</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/accreditations">
                Accreditations & Certifications
              </NavLink>
              {props.array.includes("accreditation") ? (
                <FontAwesomeIcon
                  className="float-right"
                  icon={faCheck}
                  color="green"
                />
              ) : (
                ""
              )}
            </li>
          )}

          {props.req_documents ? (
            <li>
              <NavLink className="btn p-0 color" to="/required_documents">
                <b>Required documents</b>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="btn text-dark p-0" to="/required_documents">
                Required documents
              </NavLink>              
            </li>
          )}
          <br />

          <li className="sidebar-footer text-white">
            Complete <b>{props.number} more steps</b> to finish your application
          </li>

        </ul>
      </div>
    </>
  );
};
