import React from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";
import Prize_icon_1 from "../../resource/image/prize_badge_1@2x.png";
import Prize_icon_2 from "../../resource/image/prize_badge_2@2x.png";
import Prize_icon_3 from "../../resource/image/prize_badge_3@2x.png";
// import styled from "styled-components";
const AllRank = () => {
  const rankData = [
    { num: "1", point: 5, oddeven: 1 },
    { num: "2", point: 4, oddeven: 0 },
    { num: "3", point: 3, oddeven: 1 },
    { num: "4-5", point: 2, oddeven: 0 },
    { num: "6-2211", point: 1, oddeven: 1 },
    { num: "2212-2582", point: 10, oddeven: 0 },
    { num: "2583-2953", point: 5, oddeven: 1 },
    { num: "2954-3325", point: 2, oddeven: 0 },
    { num: "2583-2953", point: 5, oddeven: 1 },
    { num: "2954-3325", point: 2, oddeven: 0 },
    { num: "2583-2953", point: 5, oddeven: 1 },
    { num: "2954-3325", point: 2, oddeven: 0 },
  ];
  const gameData = {
    prizepool: { data: 3 },
    player: { data: 7000 },
    endin: { data: "00:35:11" },
  };

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          {/* <div style={{ height: "100%" }}> */}
          <header>
            <NaviBar />
            {/* <div className="detail-img-layout">
                <h1>img area</h1>
              </div> */}
          </header>
          <div className="detail-body-container">
            {/* top title & Live button */}
            <div className="detail-body-toparea">
              <p className="detail-point-text">
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    color: "var(--primay-2-01)",
                  }}
                >
                  PP 2,222
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    color: "var(--neutral-1)",
                    marginLeft: 1,
                  }}
                >
                  Tournament
                </span>
              </p>
              <div className="detail-livebox">
                <span>ㅁ</span>
                <p>Live</p>
              </div>
            </div>
            {/* icon box */}
            <div className="icon-container">
              <div className="icon-wrapper">
                {/* prize pool */}
                <div className="icon-inside-layout">
                  <img
                    src={Prize_icon_2}
                    alt=""
                    className="icon-round"
                  />
                  <div style={{ textAlign: "center" }}>
                    <span className="icon-textarea">
                      prize pool
                    </span>
                    <div className="pp-container">
                      <span className="icon-ppnum">2</span>
                    </div>
                  </div>
                </div>
                <div className="icon-inside-layout">
                  <img
                    src={Prize_icon_1}
                    alt=""
                    className="icon-round"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #e2e2ea",
                      borderLeft: "1px solid #e2e2ea",
                    }}
                  >
                    <span className="icon-textarea">
                      player
                    </span>
                    <div className="pp-container">
                      <span className="icon-ppnum">
                        7000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="icon-inside-layout">
                  <img
                    src={Prize_icon_3}
                    alt=""
                    className="icon-round"
                  />
                  <div style={{ textAlign: "center" }}>
                    <span className="icon-textarea">
                      ends in
                    </span>
                    <div className="pp-container">
                      <span
                        className="icon-ppnum"
                        style={{ color: "#e44f4f" }}
                      >
                        00:35:11
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                        // info.oddeven === 1
                        //   ? "#eaf2f4" :
                        "#fff",
                    }}
                  >
                    <p className="prize-rank-text">
                      Rank {info.num}
                    </p>
                    <div
                      style={{
                        width: 65,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        className="pp-wrapper"
                        style={{ marginRight: 19 }}
                      >
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
            <div
              style={{
                position: "fixed",
                height: 81.6,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.8,
                  backgroundImage:
                    "linear-gradient(to top, #fff 110%, rgba(255, 255, 255, 0) 21%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "82%",
                  maxWidth: 690,
                  height: 50,
                  padding: "0 10%",
                }}
              >
                {/* <a href="/smash"> */}
                <button className="allrank-join-button">
                  Join Tournament Free
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AllRank;
