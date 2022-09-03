import Login from "../../img/log.svg";
import Register from "../../img/register.svg";
import "./signin_signup.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { motion } from "framer-motion";

export default function SigninSignup() {
  const { userData, fetchdata, showAlert } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.active) navigate(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
  //for navigate to other route

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [loginData, checkUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const toggleclassName = () => {
    document.querySelector("#signin_signup").classList.toggle("sign-up-mode");
  };
  //posting singup data to server
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password, cpassword }),
    });

    let data = await response.json();

    if (response.status === 422 || !data) {
      // window.alert(data.error);
      showAlert("warning", data.error);

      // console.log("Invalid registration");
    } else {
      // window.alert(data.message);
      showAlert("success", data.message);

      document.querySelector("#signin_signup").classList.toggle("sign-up-mode");
      console.log("successful registration");

      //setting all value to empty
      setUser({
        ...user,
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });
    }
  };
  const handleLogin = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    checkUser({ ...loginData, [name]: value });
  };
  // post login data to server
  const userLogin = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = loginData;

      const response = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status !== 201 || !data) {
        showAlert("warning", data.error);
        throw new Error(data.error);
      }
      navigate("/");
      // window.alert(data.message);
      // console.log(data.message);
      showAlert("success", data.message);

      fetchdata();

      //setting all value to empty
      checkUser({ email: "", password: "" });
    } catch (error) {
      // window.alert(error);
    }
  };

  return (
    <motion.div
      id="signin_signup"
      className={"containerCustom"}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="forms-containerCustom">
        <div className="signin-signup">
          {/*sign in form */}
          <form method="POST" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="email"
                type="email"
                value={loginData.email}
                placeholder="Email"
                onChange={handleLogin}
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                type="password"
                value={loginData.password}
                placeholder="Password"
                onChange={handleLogin}
              />
            </div>
            <button
              type="submit"
              className="form-btn btn  "
              onClick={userLogin}
            >
              <span>
                Login
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>

            <div className="social ">
              <h3 className="social-text">Or Sign in with </h3>
              <ul className="list-unstyled social-media">
                <li className="in">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="tw">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li className="ln">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
          {/*sign up form */}
          <form method="POST" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="name"
                type="text"
                value={user.name}
                placeholder="Name"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                type="email"
                value={user.email}
                placeholder="Email"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile-retro"></i>
              <input
                name="phone"
                type="number"
                value={user.phone}
                placeholder="Phone number"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="cpassword"
                type="password"
                value={user.cpassword}
                placeholder="Conform Password"
                onChange={handleInput}
              />
            </div>
            <button
              className="form-btn btn  btn-success"
              type="submit"
              onClick={postData}
            >
              <span>
                Sign up
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>

            <div className="social ">
              <h3 className="social-text">Or Sign up with </h3>
              <ul className="list-unstyled social-media">
                <li className="in">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="tw">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li className="ln">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      {/*pannels */}
      <div className="panels-containerCustom">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              "Once again...welcome to my house. Come freely. Go safely; and
              leave something of the happiness you bring."
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={toggleclassName}
            >
              Sign up
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              "Welcome to those who believe in the power of dreams and who would
              like to join me in my exploration of life."
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={toggleclassName}
            >
              Sign in
            </button>
          </div>
          <img src={Login} className="image" alt="" />
        </div>
      </div>
    </motion.div>
  );
}
