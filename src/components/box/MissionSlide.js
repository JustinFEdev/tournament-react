import React from "react";

const MissionSlide = () => {
  return (
    <>
      <div style={{ width: 220, position: "absolute" }}>
        <div
          style={{
            height: 217,
            borderRadius: " 16px",
            backgroundColor: "#9bc8d7",
          }}
          alt=""
        />
        <div
          style={{
            fontFamily: "AppleSDGothicNeo",
            textAlign: "left",
            padding: "20px 0 0 0",
          }}
        >
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
            <span
              style={{
                width: 34,
                height: 34,
                border: "solid 1.5px #149231",
                backgroundColor: "#38ae53",
                margin: " 0 10px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <p
                style={{
                  margin: "auto",
                  fontSize: 22,
                  fontWeight: 800,
                  display: "flex",
                  height: "88%",
                  alignItems: "flex-end",
                }}
              >
                PP
              </p>
            </span>
            <span>2</span>
          </p>
          <p
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#85b8c8",
            }}
          >
            Target 60
          </p>
          <p
            style={{
              fontSize: 30,
              color: "#85b8c8",
            }}
          >
            START NOW
          </p>
        </div>
      </div>
    </>
  );
};

export default MissionSlide;
