import React from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";

const Completed = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100vh" }}>
            <NaviBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
