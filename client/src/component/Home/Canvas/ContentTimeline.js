import React from "react";

export default function ContentTimeline() {
  const d = new Date();
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
                <span className="sub-head">{`${d.getDate() - 7}th ${
                  monthNames[d.getMonth()]
                }, ${d.getFullYear()}`}</span>
                <br />
                <div className="progress-box">
                  <i className="fas fa-circle"></i>
                  <div className="progress-line"></div>
                </div>
              </li>
              <li className="step">
                <span className="head">Application Deadline</span>
                <br />
                <span className="sub-head">{`${d.getDate()}th ${
                  monthNames[d.getMonth()]
                }, ${d.getFullYear()}`}</span>
                <br />
                <div className="progress-box">
                  <i className="fas fa-circle"></i>
                  <div className="progress-line"></div>
                </div>
              </li>
              <li className="step">
                <span className="head">Project Submission Deadline</span>
                <br />
                <span className="sub-head">{`${d.getDate() + 7}th ${
                  monthNames[d.getMonth()]
                }, ${d.getFullYear()}`}</span>
                <br />
                <div className="progress-box">
                  <i className="fas fa-circle"></i>
                  <div className="progress-line"></div>
                </div>
              </li>
              <li className="step non-active">
                <span className="head">Results</span>
                <br />
                <span className="sub-head">{`${d.getDate() + 7}th ${
                  monthNames[d.getMonth() + 1]
                }, ${d.getFullYear()}`}</span>
                <br />
                <div className="progress-box">
                  <i className="fas fa-circle"></i>
                  <div className="progress-line"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end-2 */}
    </>
  );
}
