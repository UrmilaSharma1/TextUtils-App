import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav class={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.title}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.aboutText}</a>
            </li>
          </ul>
          <fieldset className="mb-3">
              <div className={`form-check text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Enable Gray Mode
                </label>
              </div>
              <div className={`form-check text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleRed} type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                <label className="form-check-label" htmlFor="gridRadios1">
                Enable Red Mode
                </label>
              </div>
              <div className={`form-check text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleGreen} type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label className="form-check-label" htmlFor="gridRadios2">
                Enable Green Mode
                </label>
              </div>

          </fieldset>
        </div>
          
      </div>
    </nav>
  );
}
Navbar.propTypes = { 
  title: PropTypes.string,
  aboutText: PropTypes.string 
}
// Set default prop values
Navbar.defaultProps={
  title:'Set title here',
  aboutText:'About Us'
}