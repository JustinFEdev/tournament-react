import React from "react";
import "./navi.css";

const NaviBar = () => {
  return (
    <>
      <div
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          justifyContent: "space-between",
          backgroundColor: "#c9e2ea",
        }}
      >
        <button>Menu</button>
        <div>Menu status</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="navi-pointwrapper">
            <span className="navi-insideball">PP</span>
            <span>number</span>
          </div>
          <div className="navi-pointwrapper">
            <span
              className="navi-insideball"
              style={{
                backgroundColor: "#ffb400",
                opacity: 0.78,
                border: " solid 1.5px #ff9600",
              }}
            >
              T
            </span>
            <span>number</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NaviBar;
