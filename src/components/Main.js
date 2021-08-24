import React from "react";
import ContinueSlide from "./box/ContinueSlide";
import LiveSlide from "./box/LiveSlide";
import MissionSlide from "./box/MissionSlide";
import GameItem from "./box/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.css";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div
          style={{
            width: 690,
            minWidth: 690,
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          <header>
            <NaviBar />
          </header>
          {/* LiveSlide */}
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "30px 0 0 0",
            }}
          >
            <div style={{ paddingBottom: 59.5 }}>
              <LiveSlide />
            </div>
          </div>
          {/* Continue Playing */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0 0 59.5px 0",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 30px 40px 30px",
                }}
              >
                <div
                  style={{
                    paddingTop: "24.5px",
                    borderTop: "solid 1.3px #c9e2ea",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      fontSize: 38,
                      color: "#09607b",
                      fontWeight: 800,
                    }}
                  >
                    Continue Playing
                  </span>
                  <span
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "#57a8c2",
                      cursor: "pointer",
                    }}
                  >
                    option
                  </span>
                </div>
              </div>
              <div style={{ height: 362 }}>
                <ContinueSlide />
              </div>
            </div>
          </div>
          {/* Weekly Mission */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 30px 40px 30px",
                }}
              >
                <div
                  style={{
                    paddingTop: "24.5px",
                    borderTop: "solid 1.3px #c9e2ea",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      fontSize: 38,
                      color: "#09607b",
                      fontWeight: 800,
                    }}
                  >
                    Weekly Mission
                  </span>
                  <span
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "#57a8c2",
                      cursor: "pointer",
                    }}
                  >
                    See All
                  </span>
                </div>
              </div>
              <div style={{ height: 345 }}>
                <MissionSlide />
              </div>
              <h2 style={{ padding: "35px 0 60px 0" }}>
                6 days left to complet
              </h2>
            </div>
          </div>
          {/* Featured Tournament */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              //   borderBottom: "solid 1.3px #c9e2ea",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 30px",
                }}
              >
                <p
                  style={{
                    fontFamily: "AppleSDGothicNeo",
                    paddingTop: "24.5px",
                    borderTop: "solid 1.3px #c9e2ea",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 38,
                    color: "#09607b",
                    fontWeight: 800,
                  }}
                >
                  Featured Tournaments
                </p>
                {/* big img area */}
                <img
                  style={{
                    width: "100%",
                    height: 314,
                    marginTop: "20px",
                    borderRadius: 12.5,
                    boxShadow: "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2.5px #86b1be",
                    backgroundColor: "#c9e2ea",
                    outline: "none",
                  }}
                  alt=""
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span>PP</span>
                  </div>
                  <div>
                    <span>num</span>
                    <span>notice</span>
                  </div>
                </div>
                {/* small img area */}
                <div
                  style={{
                    width: "100%",
                    borderBottom: "solid 1.3px #c9e2ea",
                    padding: "43px 0 63px 0",
                  }}
                >
                  <div style={{ width: 291, textAlign: "left" }}>
                    <div
                      style={{
                        width: "100%",
                        height: 361,
                        borderRadius: 12.5,
                        boxShadow: "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                        border: "solid 2.5px #86b1be",
                        backgroundColor: "#c9e2ea",
                        outline: "none",
                      }}
                      alt="1"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span>PP</span>
                      </div>
                      <div>
                        <span>num</span>
                        <span>notice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide menu */}
          <div
            style={{
              width: "100%",
              padding: "15px 0 0 0",
              display: "inline-flex",
            }}
          >
            <span
              style={{
                padding: "17px 27px",
                borderRadius: 35,
                backgroundColor: "#9bd0e1",
                fontSize: 30,
                fontWeight: 500,
                marginRight: 15,
              }}
            >
              All Games
            </span>
            <span
              style={{
                padding: "17px 27px",
                borderRadius: 35,
                backgroundColor: "#fff",
                border: "solid 2.5px #77b5c9",
                fontSize: 30,
                fontWeight: 500,
                marginRight: 15,
              }}
            >
              New Arrival
            </span>
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              padding: "0 30px",
              //   justifyContent: "space-between",
            }}
          >
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
          </div>
          {/* <footer>Footer</footer> */}
        </div>
      </div>
    </>
  );
};

export default Main;
