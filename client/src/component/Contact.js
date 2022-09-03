import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import inbox from "../img/inbox.webp";
import { UserContext } from "../App";
import { motion } from "framer-motion";

export default function Contact() {
  const { userData, showAlert } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    userData.active &&
      setUser({
        ...user,
        name: userData.name,
        email: userData.email,
        active: userData.active,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  //defing usestate for setting user data
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    active: false,
  });

  //posting user message to server
  const postContactData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          message: user.message,
        }),
      });

      const data = await response.json();

      if (response.status === 401) {
        showAlert("warning", data.error);
        navigate("/signin");
        throw new Error(data.error);
      }
      if (response.status !== 201) {
        showAlert("warning", data.error);
        throw new Error(data.error);
      }

      showAlert("success", data.message);
      // alert(data.message);
      setUser({ ...user, message: "" });
    } catch (error) {}
  };
  //handling change in input
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <motion.div
        className="containerCustom"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="forms-containerCustom">
          <div className="signin-signup">
            {/*sign in form */}
            <form method="POST" className="sign-in-form">
              <h2 className="title">Contact Us</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  name="name"
                  type="text"
                  value={user.name}
                  placeholder="Name"
                  onChange={handleInput}
                  disabled={user.active}
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
                  disabled={user.active}
                />
              </div>
              <div className="input-field textarea">
                <i className="fa-solid fa-message"></i>
                <textarea
                  name="message"
                  type="textarea"
                  value={user.message}
                  placeholder="Message"
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="form-btn btn  "
                onClick={postContactData}
              >
                <span>
                  Send
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
        {/*pannels */}
        <div className="panels-containerCustom">
          <div className="panel left-panel">
            <div className="content">
              <h3>Any Problem ?</h3>
              <p>
                Please feel free to contact me if you need any further
                information.
              </p>
            </div>
            <img src={inbox} className="image" alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
