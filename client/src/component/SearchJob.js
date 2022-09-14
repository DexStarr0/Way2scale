import React, { useState, useContext } from "react";
import Jobbox from "./Jobbox";
import { motion } from "framer-motion";
import { UserContext } from "../App";
// import jobdata from "./jobsdata.json";

export default function SearchJob() {
  const { showAlert } = useContext(UserContext);
  const [jobs, setjobs] = useState(null);
  const [searchkey, setsearchkey] = useState({ job_type: "", location: "" });
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setsearchkey({ ...searchkey, [name]: value });
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      job_type: searchkey.job_type,
      location: searchkey.job_type,
    }),
  };

  const getjobs = async (e) => {
    e.preventDefault();
    try {
      if (!searchkey.job_type || !searchkey.job_type) {
        showAlert("warning", "Please fill the form properly ");
        return;
      }
      const response = await fetch("/findjobs", options);
      const data = await response.json();
      setjobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.section
        className="container-fluid "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <section className="subContainer">
          <div className="search-box">
            <h2 className="title py-3">Search Job</h2>
            <form method="POST">
              <div className="w-100  input-box d-flex flex-column flex-lg-row justify-content-center align-items-center ">
                <div className="input-field mx-lg-1">
                  <i className="fa-solid fa-briefcase"></i>
                  <input
                    name="job_type"
                    type="text"
                    value={searchkey.job_type}
                    placeholder="Job"
                    onChange={handleInput}
                  />
                </div>
                <div className="input-field mx-lg-1">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    name="location"
                    type="text"
                    value={searchkey.location}
                    placeholder="Location"
                    onChange={handleInput}
                  />
                </div>

                <button
                  type="submit"
                  className="form-btn btn mx-lg-1"
                  onClick={getjobs}
                >
                  <span>
                    Find
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </motion.section>

      {/* start-6 */}
      {jobs && (
        <section className="formate-6">
          <div className="rewards wi-1">
            <h3 className="subheading">Jobs that Matches Your Search</h3>
            <div className="reward-detail">
              {/* col-1 */}

              {jobs.map((jobinfo) => {
                return (
                  <>
                    <Jobbox jobinfo={jobinfo} />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {/* end-6 */}
    </>
  );
}
