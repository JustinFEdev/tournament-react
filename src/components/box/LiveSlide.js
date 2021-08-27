import React from "react";

const LiveSlide = () => {
  return (
    <>
      <div style={{ position: "relative", width: 620 }}>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            padding: "0 0 0 15px",
          }}
        >
          <p
            style={{
              width: 68,
              border: "1px solid",
              borderRadius: 3.8,
              backgroundColor: "#09607b",
              fontSize: 19,
              fontWeight: 500,
              padding: "10px 14px 12px",
              color: "#88d9f3",
            }}
          >
            LIVE
          </p>
          <p
            style={{
              width: 183,
              border: "1px solid",
              borderRadius: 3.8,
              backgroundColor: "#09607b",
              fontSize: 19,
              fontWeight: 500,
              padding: "10px 14px 12px",
              color: "#88d9f3",
              marginTop: 190,
            }}
          >
            Time
          </p>
        </div>
        <div
          style={{
            height: 316,
            width: "100%",
            borderRadius: "16px 16px 0 0 ",
            border: "solid 2.5px #86b1be",
            borderBottom: "none",
            backgroundColor: "#c9e2ea",
            margin: 0,
            padding: 0,
          }}
        >
          <img alt="" />
        </div>
        <div
          style={{
            width: "100%",
            height: 157,
            border: "solid 2.5px #86b1be",
            borderRadius: "0 0 16px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 13px 13px 0 rgb(77 93 107 / 13%)",
          }}
        >
          <div
            style={{
              width: "60%",
              textAlign: "left",
              paddingLeft: 25,
            }}
          >
            <span
              style={{
                fontSize: 38,
                fontWeight: 500,
                color: "#09607b",
              }}
            >
              Bit Miner
            </span>
            <br />
            <icon>icon</icon>
            <span>people number</span>
            <span>watch</span>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#09607b",
              }}
            >
              WIN
            </span>
            <span
              style={{
                width: 34,
                height: 34,
                border: "solid 1.5px #149231",
                backgroundColor: "#38ae53",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <p
                style={{
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
            <span
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#09607b",
              }}
            >
              Point
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSlide;
