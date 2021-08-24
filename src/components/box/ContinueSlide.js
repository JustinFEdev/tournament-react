import React from "react";
import "../navigation/navi.css";

const ContinueSlide = () => {
  return (
    <>
      <div style={{ width: 220, position: "absolute" }}>
        <div
          style={{
            height: 217,
            borderRadius: " 16px 16px 0 0 ",
            backgroundColor: "#9bc8d7",
          }}
          alt=""
        />
        <div
          style={{
            height: 44,
            borderRadius: " 0 0 16px 16px",
            backgroundColor: "#09607b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 23, fontWeight: 500, color: "#88d9f3" }}>
            Time
          </span>
        </div>
        <div
          style={{
            fontFamily: "AppleSDGothicNeo",
            textAlign: "left",
            padding: "20px 0 0 0",
          }}
        >
          <p style={{ fontSize: 30, fontWeight: 500, color: "#85b8c8" }}>
            Play Again
          </p>
          <p
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#09607b",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>To Win</span>
            <span className="navi-insideball" style={{ margin: "0 15px" }}>
              PP
            </span>
            <span>2</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContinueSlide;
