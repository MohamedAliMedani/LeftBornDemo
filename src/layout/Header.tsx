import React, { Fragment } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  return (
    <Fragment>
      <nav className="mb-5">
        <input type="checkbox" id="nav-toggle" />
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Demo
        </div>
        <ul className="links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        {/* <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label> */}
      </nav>
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
    </Fragment>
  );
}

export default Header;
