import React from "react";
import cup from "../../../img/convas/Frame.png";

export default function Contest() {
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
      {/* start-1 */}
      <section className="formate-1">
        <div className="extra-bg">
          <div className="circle circle-1"></div>
          <img className="frame-circle" src={cup} alt="" />
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <div className="global-canvas wi-1">
          <div className="top-1">
            <i className="fas fa-user-tie"></i>
            <span>upto 3 members teams</span>
          </div>
          <div className="top-1">
            <i className="far fa-calendar"></i>
            <span>For 7-8 olds</span>
          </div>

          <h2>Full Stack Development Test</h2>
          <p>
            A case study round that tests your ability to pitch, negotiate, and
            handle <br />
            objections while making a sale. Negotiation Pitching Objection
            Handling.
          </p>

          <p id="date-1">{`${d.getDate() - 7}th ${
            monthNames[d.getMonth()]
          }, ${d.getFullYear()} - ${d.getDate() + 7}th ${
            monthNames[d.getMonth() + 1]
          }, ${d.getFullYear()}`}</p>
          <button className=" m-2 py-1 px-2 bg-dark text-white">
            <a
              className="text-white"
              href="https://relevel.com/test/full-stack-development"
              target="blank"
            >
              <span>Enter Now</span>
            </a>
            <i className="fa-solid fa-arrow-right px-1"></i>
          </button>

          <button className=" m-2 py-1 px-2">
            <i className="fa-solid fa-download px-1"></i>
            <a
              href="https://relevel.com/test/full-stack-development"
              target="blank"
            >
              <span className="text-black">Download Guideline</span>
            </a>
          </button>
        </div>
      </section>
      {/* end-1 */}
    </>
  );
}
