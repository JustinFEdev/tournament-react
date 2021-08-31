import React, { useState, useEffect } from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";

const Completed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

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
                  // border: "1px solid",
                  height: "100vh",
                  width: "100%",
                  paddingTop: 40,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "AppleSDGothicNeo",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "#09607b",
                  }}
                >
                  24 June 2021
                </span>
                <div
                  style={{
                    padding: 25,
                    borderRadius: 10,
                    border: "solid 2.5px #bcd3da",
                    marginTop: 25,
                    backgroundColor: "#f5fafc",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      <img
                        alt=""
                        style={{
                          width: 95,
                          height: 95,
                          opacity: 0.65,
                          borderRadius: 12.5,
                          border: "solid 1.3px #86b1be",
                          backgroundColor: "#c9e2ea",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginLeft: 20,
                        padding: "10px 0",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "AppleSDGothicNeo",
                          fontSize: 32,
                          fontWeight: "bold",
                          color: "#09607b",
                        }}
                      >
                        PP2222 Tournament
                      </span>
                      <div style={{ marginTop: 9 }}>
                        <span
                          style={{
                            fontFamily: "AppleSDGothicNeo",
                            fontSize: 28,
                            fontWeight: 500,
                            color: "#09607b",
                          }}
                        >
                          Bitminer
                        </span>
                        <span
                          style={{
                            fontFamily: "AppleSDGothicNeo",
                            fontSize: 28,
                            fontWeight: 500,
                            color: "#09607b",
                          }}
                        >
                          icon
                        </span>
                        <span
                          style={{
                            fontFamily: "AppleSDGothicNeo",
                            fontSize: 28,
                            fontWeight: 500,
                            color: "#09607b",
                          }}
                        >
                          7111 Players
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "38px 0",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
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
                          number
                        </span>
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 30,
                          fontWeight: 500,
                          color: "#598b9b",
                        }}
                      >
                        Score
                      </span>
                      <div
                        style={{
                          fontSize: 30,
                          fontWeight: 500,
                          color: "#598b9b",
                        }}
                      >
                        10,000
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 30,
                          fontWeight: 500,
                          color: "#598b9b",
                        }}
                      >
                        You won
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
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
                          number
                        </span>
                      </div>
                    </div>
                  </div>
                  <a href="/leaderboard">
                    <button
                      style={{
                        width: "100%",
                        height: 65,
                        borderRadius: 7.5,
                        border: "solid 1.5px #6193a3",
                        backgroundColor: "#acc9d2",
                        fontSize: 30,
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      LEADERBOARD
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
