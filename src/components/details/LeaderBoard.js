import React from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";

const LeaderBoard = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100vh" }}>
            <header>
              <NaviBar />
              <div className="detail-img-layout">
                <h1>img area</h1>
              </div>
            </header>
            <div>Leader Board</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
