import React from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";

const Completed = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100%" }}>
            <header>
              <NaviBar />
            </header>
            <div
              style={{
                position: "relative",
                padding: "80px 32px 74px 32px",
              }}
            >
              <div
                style={{
                  border: "1px solid",
                  height: "100vh",
                  width: "100%",
                  paddingTop: 40,
                }}
              >
                asda
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
