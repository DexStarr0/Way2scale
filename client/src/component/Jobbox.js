import React from "react";

export default function Jobbox(props) {
  const jobinfo = props.jobinfo;

  return (
    <div key={jobinfo.job_id} className="col-1 col-formate">
      <div className="imgBx">
        <img src={jobinfo.thumbnail} alt="" />
      </div>
      <div className="sub-cont">
        <h3>{jobinfo.title.slice(0, 22)}...</h3>
        <ul>
          <li>{jobinfo.company_name}</li>
          <li>{jobinfo.location}</li>
          <li>{jobinfo.extensions[0]}</li>
          <li>{jobinfo.extensions[1]}</li>

          <li>{jobinfo.location}</li>
        </ul>
      </div>
    </div>
  );
}
