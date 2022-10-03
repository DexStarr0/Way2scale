import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHelp } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function SignInOut() {
  const toggler = () => {
    document.querySelector(".profile_dummy_icon").classList.toggle("showOpt");
  };
  const { userData, fetchdata, showAlert } = useContext(UserContext);
  const navigate = useNavigate();

  const Signout = async () => {
    try {
      const response = await fetch("/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.status !== 200) {
        // alert(data.error);
        showAlert("warning", data.error);
        throw new Error(data.error);
      }
      //updating userdata by calling fetchdata function
      fetchdata();
      // alert(data.message);
      showAlert("success", data.message);
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  if (userData.active) {
    return (
      <>
        <section className="profile_box_main">
          <div className={"profile_dummy_icon rounded-circle "}>
            <div className="profile_avtar" onClick={toggler}>
              <span>
                <IoPersonCircleSharp />
              </span>
            </div>

            <section
              className="profileOptins p-2
            rounded-bottom rounded-start"
            >
              <Link className="nav_link" to="/profile">
                <span className="nav_title_icon">
                  <IoPersonCircleSharp />
                </span>
                <span className="nav_title">profile</span>
              </Link>
              <Link className="nav_link" to="/support">
                <span className="nav_title_icon">
                  <MdOutlineHelp />
                </span>
                <span className="nav_title">Help & Support</span>
              </Link>

              <button className="nav_link" onClick={Signout}>
                <span className="nav_title_icon">
                  <FaSignOutAlt />
                </span>
                <span className="nav_title">sign out</span>
              </button>
            </section>
          </div>
        </section>
      </>
    );
    //
  } else {
    return (
      <>
        <Link className="signin rounded" to="/signin">
          <span className="nav_title">sign in</span>
        </Link>
      </>
    );
  }
}
