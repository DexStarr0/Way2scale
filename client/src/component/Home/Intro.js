import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

export default function Intro() {
  const { userData } = useContext(UserContext);

  // setting user data to display
  const [user, setUser] = useState(userData);

  useEffect(() => {
    setUser({
      ...userData,
    });
  }, [userData]);
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-capitalize text-white mb-2b title">
                  Welcome {user.name} To Our World
                </h1>
                <p className=" mb-2 subContent">
                  {user.active
                    ? `How are you? It really is great to see you. I’ve missed your presence around here. Yay!`
                    : `“In order to write about life first you must live it.” – Ernest Hemingway`}
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-center">
                  <button type="submit" className="form-btn btn  ">
                    <span>
                      Get Started
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                  <button type="submit" className="form-btn btn  ">
                    <span>
                      Learn More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
