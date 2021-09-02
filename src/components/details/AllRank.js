import React from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";
// import styled from "styled-components";
const AllRank = () => {
  // const [rank, setRank] = useState([]);
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
            <div className="detail-body-container">
              {/* top title & Live button */}
              <div className="detail-body-toparea">
                <h1 className="detail-point-text">
                  PP 2,222 Tournament
                </h1>
                <span className="detail-livebox">LIVE</span>
              </div>
              {/* icon box */}
              <div className="icon-container">
                {gameData.map((info) => (
                  <>
                    <div className="icon-wrapper">
                      <span className="icon-round">
                        icon
                      </span>
                      <div className="icon-inside-layout">
                        <div
                          style={{ textAlign: "center" }}
                        >
                          <span className="icon-textarea">
                            Prize Pool
                          </span>

                          <div className="pp-container">
                            <span className="pp-wrapper">
                              <div className="pp-text">
                                PP
                              </div>
                            </span>
                            <span className="icon-ppnum">
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
                <div className="prize-text">
                  Prize Break-up
                </div>
                {rankData.map((info) => (
                  <>
                    <div
                      className="prize-rank-layout"
                      style={{
                        backgroundColor:
                          info.oddeven === 1
                            ? "#eaf2f4"
                            : "#fff",
                      }}
                    >
                      <p className="prize-rank-text">
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
                        <span className="pp-wrapper">
                          <div className="pp-text">PP</div>
                        </span>
                        <span className="icon-ppnum">
                          {info.point}
                        </span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* Join button */}
              <a href="/smash">
                <button className="allrank-join-button">
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
