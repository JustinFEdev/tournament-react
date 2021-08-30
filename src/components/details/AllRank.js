import React from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";

const AllRank = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100%" }}>
            <header>
              <NaviBar />
              <div className="detail-img-layout">
                <h1>img area</h1>
              </div>
            </header>
            <div
              style={{
                position: "relative",
                padding: "0 32px",
              }}
            >
              <div
                style={{
                  border: "1px solid",
                  height: "100vh",
                  width: "100%",
                }}
              >
                asd
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRank;
