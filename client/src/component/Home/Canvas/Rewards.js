import React from "react";
import reward_1 from "../../../img/convas/reward-1.png";
import reward_2 from "../../../img/convas/reward-2.png";
import reward_3 from "../../../img/convas/reward-3.png";
import reward_4 from "../../../img/convas/reward-4.png";

export default function Rewards() {
  return (
    <>
      {/* start-6 */}
      <section className="formate-6">
        <div className="circle circle-5"></div>
        <div className="rewards wi-1">
          <h3 className="subheading">Rewards</h3>
          <div className="reward-detail">
            {/* col-1 */}
            <div className="col-1 col-formate">
              <div className="imgBx">
                <img src={reward_1} alt="" />
              </div>
              <div className="sub-cont">
                <h3>Grand Prize</h3>
                <ul>
                  <li>1 Winner</li>
                  <li>$5000 Cash Prize</li>
                </ul>
              </div>
            </div>
            {/* col-2 */}
            <div className="col-2 col-formate">
              <div className="imgBx">
                <img src={reward_2} alt="" />
              </div>
              <div className="sub-cont">
                <h3>First Runner Up</h3>
                <ul>
                  <li>2 Winners</li>
                  <li>Trip to Australia</li>
                  <li>$2000 Cash Prize</li>
                  <li>Trip to Australia</li>
                </ul>
              </div>
            </div>
            {/* col-3 */}
            <div className="col-3 col-formate">
              <div className="imgBx">
                <img src={reward_3} alt="" />
              </div>
              <div className="sub-cont">
                <h3>Second Runner Up</h3>
                <ul>
                  <li>5 Winners</li>
                  <li>$1000 Cash Prize</li>
                  <li>Certificate</li>
                </ul>
              </div>
            </div>
            {/* col-4 */}
            <div className="col-4 col-formate">
              <div className="imgBx">
                <img src={reward_4} alt="" />
              </div>
              <div className="sub-cont">
                <h3>Special Category Prize</h3>
                <ul>
                  <li>10 Winner</li>
                  <li>$500 Cash Prize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end-6 */}
    </>
  );
}
