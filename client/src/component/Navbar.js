import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import Logo from "../img/logo.png";
import { Link, useLocation } from "react-router-dom";

import {
  RiHomeSmile2Fill,
  RiHomeSmile2Line,
  RiMailSendFill,
  RiMailSendLine,
} from "react-icons/ri";
import { HiOutlineBriefcase, HiBriefcase } from "react-icons/hi";
import { IoNewspaperOutline, IoNewspaper } from "react-icons/io5";

import SignInOut from "./SignInOut";

export default function Navbar() {
  const location = useLocation();
  const [path, setpath] = useState(location.pathname);

  useEffect(() => {
    setpath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="container-fluid navBar bg-light d-flex justify-content-center align-items-center">
      <div className="sub-nav d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Link className="navBar-brand" to="/">
            <img src={Logo} alt="logo" className="img-responsive" />
          </Link>
          <div className="navbar_opt text-capitalize  d-flex justify-content-evenly align-items-center">
            <Link className="nav_link m-md-2" to="/">
              <span className="nav_title_icon">
                {path === "/" ? <RiHomeSmile2Fill /> : <RiHomeSmile2Line />}
              </span>

              <span className="nav_title">Home</span>
            </Link>
            <Link className="nav_link m-md-2 " to="/contact">
              <span className="nav_title_icon">
                {path === "/contact" ? <RiMailSendFill /> : <RiMailSendLine />}
              </span>

              <span className="nav_title">contact</span>
            </Link>
            <Link className="nav_link m-md-2 " to="/explore">
              <span className="nav_title_icon">
                {path === "/explore" ? <IoNewspaper /> : <IoNewspaperOutline />}
              </span>
              <span className="nav_title">Explore</span>
            </Link>
            <Link className="nav_link m-md-2 " to="search-job">
              <span className="nav_title_icon">
                {path === "/search-job" ? (
                  <HiBriefcase />
                ) : (
                  <HiOutlineBriefcase />
                )}
              </span>
              <span className="nav_title">Search Job</span>
            </Link>
          </div>
        </div>
        {/* implimente toggle btw signin and signout */}
        <SignInOut />
      </div>
    </nav>
  );
}
