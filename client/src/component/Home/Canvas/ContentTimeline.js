import React from "react";

export default function ContentTimeline() {
  return (
    <>
      {/* start-2 */}
      <section className="formate-2">
        <div className="contest-timeline wi-1">
          <h3 className="subheading">Contest Timeline</h3>
          <div id="progress">
            <ul id="progress-num">
              <li className="step active">
                <span className="head">Launch</span>
                <br />
                <span className="sub-head">7 days ago</span>
                <br />
                <i className="fas fa-circle"></i>
              </li>
              <li className="step">
                <span className="head">Application Deadline</span>
                <br />
                <span className="sub-head">15th Jan, 2021</span>
                <br />
                <i className="fas fa-circle"></i>
              </li>
              <li className="step">
                <span className="head">Project Submission Deadline</span>
                <br />
                <span className="sub-head">15th Feb, 2021</span>
                <br />
                <i className="fas fa-circle"></i>
              </li>
              <li className="step non-active">
                <span className="head">Results</span>
                <br />
                <span className="sub-head">15th March, 2021</span>
                <br />
                <i className="fas fa-circle"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end-2 */}
    </>
  );
}
