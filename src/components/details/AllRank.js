import React, { useState } from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";
// import styled from "styled-components";
const AllRank = () => {
  const [rank, setRank] = useState([]);
  const rankData = [
    { num: "1", point: 5, oddeven: 1 },
    { num: "2", point: 4, oddeven: 0 },
    { num: "3", point: 3, oddeven: 1 },
    { num: "4-5", point: 2, oddeven: 0 },
    { num: "6-2211", point: 1, oddeven: 1 },
    { num: "2212-2582", point: 10, oddeven: 0 },
    { num: "2583-2953", point: 5, oddeven: 1 },
    { num: "2954-3325", point: 2, oddeven: 0 },
  ];
  const gameData = [
    { data: 3 },
    { data: 7000 },
    { data: "00:35:11" },
  ];

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
                padding: "58px 32px 48px 32px",
              }}
            >
              {/* top title & Live button */}
              <div
                style={{
                  width: "100%",
                  padding: "0 0 48px 0",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    color: "#09607b",
                    textTransform: "uppercase",
                  }}
                >
                  PP 2,222 Tournament
                </h1>
                <span
                  style={{
                    padding: "10px 14px 10px",
                    width: 68,
                    borderRadius: 3.8,
                    backgroundColor: "#09607b",
                    fontSize: 19,
                    fontWeight: 500,
                    color: "#88d9f3",
                  }}
                >
                  LIVE
                </span>
              </div>
              {/* icon box */}
              <div
                style={{
                  // height: "30vh",
                  display: "flex",
                  alignItems: "center",
                  padding: "46px 0 60px 0",
                }}
              >
                {gameData.map((info) => (
                  <>
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        margin: "0 6px",
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          top: "3%",
                          width: 60,
                          height: 60,
                          margin: "0 69px 137px",
                          padding: "19px 12px 18px 14px",
                          border: "solid 2.5px #86b1be",
                          backgroundColor: "#dcedf2",
                          borderRadius: 30,
                        }}
                      >
                        icon
                      </span>
                      <div
                        style={{
                          padding: "46px 30px 35px 31px",
                          // width: 198,
                          // height: 163,
                          borderRadius: 15.1,
                          border: "solid 2.5px #86b1be",
                          backgroundColor: "#f3f8f9",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          style={{ textAlign: "center" }}
                        >
                          <span
                            style={{
                              fontSize: 30,
                              fontWeight: 500,
                              color: "#598b9b",
                            }}
                          >
                            Prize Pool
                          </span>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: 9,
                            }}
                          >
                            <span
                              style={{
                                width: 34,
                                height: 34,
                                border:
                                  "solid 1.5px #149231",
                                backgroundColor: "#38ae53",
                                margin: " 0 5px 0 0 ",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 25,
                              }}
                            >
                              <div
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
                              </div>
                            </span>
                            <span
                              style={{
                                fontSize: 28,
                                fontWeight: 500,
                                color: "#09607b",
                              }}
                            >
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* ranking graph */}
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    color: "#09607b",
                    fontFamily: "AppleSDGothicNeo",
                    fontSize: 38,
                    fontWeight: "bold",
                    marginBottom: 25,
                  }}
                >
                  Prize Break-up
                </div>
                {rankData.map((info) => (
                  <>
                    <div
                      style={{
                        border: "1px solid #a7ccd5",
                        padding: "16px 50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor:
                          info.oddeven === 1
                            ? "#eaf2f4"
                            : "#fff",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "AppleSDGothicNeo",
                          fontSize: 32,
                          fontWeight: 500,
                          color: "#09607b",
                        }}
                      >
                        Rank {info.num}
                      </p>

                      <div
                        style={{
                          width: 100,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <span
                          style={{
                            width: 34,
                            height: 34,
                            border: "solid 1.5px #149231",
                            backgroundColor: "#38ae53",
                            margin: " 0 5px 0 0 ",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                          }}
                        >
                          <div
                            style={{
                              height: "88%",
                              margin: "auto",
                              fontSize: 22,
                              fontWeight: 800,
                              display: "flex",
                              alignItems: "flex-end",
                            }}
                          >
                            PP
                          </div>
                        </span>
                        <span
                          style={{
                            fontSize: 28,
                            fontWeight: 500,
                            color: "#09607b",
                          }}
                        >
                          {info.point}
                        </span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* Join button */}
              <a href="/smash">
                <button
                  style={{
                    width: "100%",
                    height: 108,
                    marginTop: 50,
                    borderRadius: 12.5,
                    boxShadow:
                      "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2.5px #149231",
                    backgroundColor: "#65c17a",
                    fontFamily: "AppleSDGothicNeo",
                    fontSize: 38,
                    fontWeight: "bold",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Join Tournament Free
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRank;
