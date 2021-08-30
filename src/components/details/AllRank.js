import React from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";

const AllRank = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100vh" }}>
            <header style={{ position: "relative" }}>
              <NaviBar />
              <div
                style={{
                  // position: "absolute",
                  border: "1px solid",
                  height: 250,
                  width: 690,
                  backgroundColor: "ButtonHighlight",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>img area</h1>
              </div>
            </header>
            <div style={{ position: "relative" }}>asd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRank;
