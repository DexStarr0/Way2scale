import React from "react";
import "./jobBox.css";
import jobLogo from "../../img/jobLogo.png";

export default function JobBox(props) {
  const jobinfo = props.jobinfo;
  return (
    <div>
      <div className="card  m-2" style={{ width: "19rem" }}>
        <div className="p-3 card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon">
                <img
                  src={jobinfo.thumbnail ? jobinfo.thumbnail : jobLogo}
                  alt="L"
                  className="img-fluid"
                />
              </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0 textDark">
                  {jobinfo.company_name.slice(0, 20)}
                </h6>
                <span>{jobinfo.extensions[0]}</span>
              </div>
            </div>
            <div className="badge">
              <span>
                <a href={jobinfo.job_id}>Apply</a>
              </span>
            </div>
          </div>
          <div className="mt-2">
            <h6 className="h5 textDark">{jobinfo.title}</h6>
            <p className="subContent">
              {jobinfo.description.slice(0, 300)} ...
            </p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-evenly">
          <small className="subTag">{jobinfo.extensions[1]}</small>
          <div>
            <i className="fa fa-map-marker px-1 " aria-hidden="true"></i>
            <small className="subTag">{jobinfo.location}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
