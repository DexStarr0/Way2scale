import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "./profile.css";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function Profile() {
  const { userData } = useContext(UserContext);

  // const navigate = useNavigate();

  const [user, setUser] = useState(userData);
  useEffect(() => {
    setUser({
      ...userData,
    });
  }, [userData]);
  return (
    <motion.section
      className="profile_container "
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="sub_container  ">
        <div className=" profile ">
          <div className="pro_detail text-center">
            <div className="avtar d-flex justify-content-center align-items-center p-4">
              <img
                className="img-fluid rounded-circle "
                src="https://images.squarespace-cdn.com/content/v1/5ec57f8c0b2153285b4f61c5/1592259666586-MN6AOKP9ZHK7DV5ORTVM/AdobeStock_230407433.jpg?format=750w"
                alt="avtar"
              />
            </div>
            <h3 className="title d-inline-block text-capitalize">
              {user.name}
            </h3>
            <div className="resume_btn d-flex justify-content-center my-3 ">
              <button className=" m-2 "> RESUME</button>
              <button className=" m-2">SUBMIT</button>
            </div>
            <p className="text-uppercase  h6">{user.work}</p>
            <div className="social text-dark bg-white text-center mt-4 ">
              <a href="error ">
                <i className="fa-brands fa-instagram p-2"></i>
              </a>

              <a href="error">
                <i className="fa-brands fa-twitter  p-2"></i>
              </a>

              <a href="error">
                <i className="fa-brands fa-linkedin p-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="about_dis">
            <h3 className="display-1  fw-bold text-capitalize">hello</h3>
            <p className="h6">Here's who You are & what You do</p>
            <div className="resume_btn d-flex justify-content-center my-3 ">
              <button className=" m-2 "> RESUME</button>
              <button className=" m-2">SUBMIT</button>
            </div>
            <p className="aboutme my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              suscipit expedita pariatur totam quis ipsam, quia repellat dolorum
              nisi. Fugiat dolorem aperiam ducimus eos nostrum mollitia quis
              asperiores omnis dolores. lorem
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
