import React, { useState, useEffect } from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";
import MissionSlide from "../box/MissionSlide";

const Smash = () => {
  const [weekly, setWeekly] = useState();

  useEffect(() => {
    const datas = [
      {
        id: 1,
        title: "aa",
        target: 4,
        point: 2,
        img: "1111",
      },
      {
        id: 2,
        title: "bb",
        target: 5,
        point: 10,
        img: "2222",
      },
      {
        id: 3,
        title: "cc",
        target: 2,
        point: 5,
        img: "3333",
      },
      {
        id: 4,
        title: "dd",
        target: 3,
        point: 1,
        img: "4444",
      },
      {
        id: 5,
        title: "ff",
        target: 5,
        point: 6,
        img: "555",
      },
    ];
    setWeekly(datas);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100%" }}>
            <header>
              <NaviBar />
              <div className="detail-img-layout">
                <div
                  style={{
                    position: "absolute",
                    width: 168,
                    height: 168,
                    borderRadius: 120,
                    top: 120,
                    boxShadow:
                      "0 10px 10px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2px #86b1be",
                    backgroundColor: "#c9e2ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  detail round
                </div>
              </div>
            </header>
            <div className="detail-body-container">
              {/* top title & Live button */}

              <div className="detail-body-toparea">
                <h1 className="detail-point-text">
                  Smash It
                </h1>
                <div
                  className="weekly-textwrapper"
                  style={{ justifyContent: "center" }}
                >
                  <h className="weekly-towin">You Won</h>
                  <span className="weekly-ppimg-layout">
                    <p className="weekly-ppimg-text">PP</p>
                  </span>
                  <div className="weekly-game-status">
                    0/20
                  </div>
                </div>
                <div className="weekly-progress-layout" />
                <span
                  className="weekly-daycount"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    padding: 0,
                  }}
                >
                  <h2 style={{ color: "lightgreen" }}>
                    ~~ days
                  </h2>
                  <h2> left to complet</h2>
                </span>
              </div>
              {/* content cards */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {weekly !== undefined && (
                  <>
                    {weekly.map((info, index) => (
                      <>
                        <div
                          style={{
                            width: 300,
                            position: "relative",
                            margin: "0 5px 40px 8px",
                          }}
                          key={index}
                        >
                          <img
                            style={{
                              position: "relative",
                              width: "100%",
                              height: 300,
                              borderRadius: "16px",
                              backgroundColor: "#9bc8d7",
                              border: "none",
                            }}
                            src={info.img}
                            alt=""
                          />
                          <div
                            style={{
                              fontFamily:
                                "AppleSDGothicNeo",
                              textAlign: "left",
                              padding: "20px 0 0 0",
                            }}
                          >
                            <div
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
                                  border:
                                    "solid 1.5px #149231",
                                  backgroundColor:
                                    "#38ae53",
                                  margin: " 0 10px",
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
                              <span>{info.point}</span>
                            </div>
                            <div
                              style={{
                                fontSize: 30,
                                fontWeight: 500,
                                color: "#85b8c8",
                              }}
                            >
                              Target {info.target}
                            </div>
                            <div
                              style={{
                                fontSize: 30,
                                color: "#85b8c8",
                              }}
                            >
                              START NOW
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smash;
