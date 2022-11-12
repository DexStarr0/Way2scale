import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "./profile.css";
import "./style.css";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function Profile() {
  const { userData } = useContext(UserContext);

  // const navigate = useNavigate();
  const [modify, setModify] = useState("true");
  const [user, setUser] = useState(userData);
  useEffect(() => {
    setUser({
      ...userData,
    });
  }, [userData]);
  const modifyData = () => {
    setModify(!modify);
  };
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUser({ ...user, [name]: value });
  };
  const updateData = async (e) => {
    e.preventDefault();
    const { phone, address, city, country, postalCode, aboutMe } = user;
    try {
      const option = {
        method: "POST",
        Headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          address,
          city,
          country,
          postalCode,
          aboutMe,
        }),
      };
      const response = await fetch("/profile", option);
      const data = await response.json();
      console.log(data);
      setModify(!modify);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.section
      className=""
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="profile_container">
        <div className="sub_container  ">
          <div className=" profile ">
            <div className="pro_detail text-center">
              <div className="avtar d-flex justify-content-center align-items-center p-4">
                <img
                  className="img-fluid rounded-circle "
                  src="https://res.cloudinary.com/dxj71mfza/image/upload/v1662131524/1176393_og9cpy.png"
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente suscipit expedita pariatur totam quis ipsam, quia
                repellat dolorum nisi. Fugiat dolorem aperiam ducimus eos
                nostrum mollitia quis asperiores omnis dolores. lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*dfhsgh*/}
      {/* <div className="wi-1 ">
        <div className="card bg-secondary shadow">
          <div className="card-header bg-white border-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h3 className="mb-0">My account</h3>
              </div>
              <div className="text-right ">
                {modify && (
                  <button
                    type="submit"
                    className="form-btn btn  "
                    onClick={modifyData}
                  >
                    <span>
                      edit
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                )}
                {!modify && (
                  <button
                    type="submit"
                    className="form-btn btn  onClick={modifyData}"
                    onClick={updateData}
                  >
                    <span>
                      save
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="card-body">
            <form method="POST">
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Username
                      </label>
                      <input
                        disabled="true"
                        name="username"
                        type="text"
                        id="input-username"
                        className="form-control form-control-alternative"
                        placeholder="Username"
                        // onChange={handleInput}
                        value={user.username}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" for="input-email">
                        Email address
                      </label>
                      <input
                        disabled="true"
                        name="email"
                        type="email"
                        id="input-email"
                        className="form-control form-control-alternative"
                        placeholder="way@scale@example.com"
                        // onChange={handleInput}
                        value={user.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label className="form-control-label" for="input-name">
                        Name
                      </label>
                      <input
                        disabled="true"
                        name="name"
                        type="text"
                        id="input-name"
                        className="form-control form-control-alternative"
                        placeholder="Name"
                        // onChange={handleInput}
                        value={user.name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label className="form-control-label" for="input-phone">
                        Phone
                      </label>
                      <input
                        disabled={modify}
                        name="phone"
                        type="Number"
                        id="input-phone"
                        className="form-control form-control-alternative"
                        placeholder="+91"
                        onChange={handleInput}
                        value={user.phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <!-- Address -->
              <h6 className="heading-small text-muted mb-4">
                Contact information
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group focused">
                      <label className="form-control-label" for="input-address">
                        Address
                      </label>
                      <input
                        disabled={modify}
                        name="homeAdress"
                        type="text"
                        id="input-address"
                        className="form-control form-control-alternative"
                        placeholder="Home Address"
                        onChange={handleInput}
                        value={user.address}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group focused">
                      <label className="form-control-label" for="input-city">
                        City
                      </label>
                      <input
                        disabled={modify}
                        name="city"
                        type="text"
                        id="input-city"
                        className="form-control form-control-alternative"
                        placeholder="City"
                        onChange={handleInput}
                        value={user.city}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group focused">
                      <label className="form-control-label" for="input-country">
                        Country
                      </label>
                      <input
                        disabled={modify}
                        name="country"
                        type="text"
                        id="input-country"
                        className="form-control form-control-alternative"
                        placeholder="Country"
                        onChange={handleInput}
                        value={user.country}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" for="input-country">
                        Postal code
                      </label>
                      <input
                        disabled={modify}
                        name="postalCode"
                        type="number"
                        id="input-postal-code"
                        className="form-control form-control-alternative"
                        onChange={handleInput}
                        placeholder="Postal code"
                        value={user.postalCode}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <!-- Description -->
              <h6 className="heading-small text-muted mb-4">About me</h6>
              <div className="pl-lg-4">
                <div className="form-group focused">
                  <label>About Me</label>
                  <textarea
                    rows="4"
                    className="form-control form-control-alternative"
                    placeholder="A few words about you ..."
                  >
                    {user.aboutMe}
                  </textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </motion.section>
  );
}
