import React, { Fragment, useContext } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../context/auth/authContext";
import PatientContext from "../../context/patient/patientContext";

const Wrapper = styled.div`
  .nav {
    height: 50px;
    padding: 0 30px;
    width: 100%;
    background-color: ${(props) => props.theme.color.ui_01};
    position: fixed;
    top: 0;
    justify-content: space-between;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    justify-content: space-between;
    font-size: 18px;
    padding: 0;
    list-style-type: none;
  }

  .nav > .nav-links a {
    display: inline-block;
	text-decoration: none;
	margin-left: 20px;
    color: #efefef;
  }

  .nav > .nav-links a:hover {
    text-decoration: underline;
    transition: 0.3s;
  }

  .nav > #nav-check {
    display: none;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 31px;
      left: 0px;
    }

    .nav > .nav-links a {
      display: block;
      width: 100%;
      border-bottom: 1px solid lightgray;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(30vh - 50px);
      overflow-y: auto;
      padding: 0 40px;
    }
  }
`;

function Navbar(props) {
  const authContext = useContext(AuthContext);
  const patientContext = useContext(PatientContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearPatients} = patientContext;

  const onLogout = () =>{
    logout();
    clearPatients();
  }
  const authLinks = (
    <Fragment>
      <li style={{color: "#fff"}}>
	  Hello {user && user.name}</li>
      <li>
        <Link onClick={onLogout} to="#!">Logout</Link>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <Wrapper>
      <div className="nav flex">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/" className="nav-title">
            PDAS
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul className="nav-links flex">
			{isAuthenticated ? authLinks : guestLinks}
		</ul>
      </div>
    </Wrapper>
  );
}

Navbar.propTypes = {};

export default Navbar;
