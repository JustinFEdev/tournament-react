import React, { useState, useEffect } from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";
import { AddComma } from "../Main";

const LeaderBoard = () => {
  const [rankInfo, setRankInfo] = useState();

  useEffect(() => {
    const array = [];
    const username = [
      "jack lucas",
      "max lucas",
      "james max",
      "raphael choi",
      "lucas rachel",
      "santiago",
      "alex kim",
      "park sam",
      "lucius kim",
      "paul lucas",
      "sam jacky",
      "rachel park",
      "lucius park",
      "sanchaz jacky",
      "jacky lucius",
      "lucius choi",
    ];
    for (let i = 0; i < 15; i++) {
      const score = Math.floor(Math.random() * 10000) + 1;
      const prize = Math.floor(Math.random() * 10) + 1;
      const user =
        username[
          Math.floor(Math.random() * 100) % username.length
        ];
      const userDatas = {
        score: AddComma(score),
        prize: prize,
        username: user,
      };
      array.push(userDatas);
    }
    const tt = [];
    array.map((info) => tt.push(info));
    setRankInfo(
      tt.sort((a, b) => (a.score > b.score ? -1 : 1))
    );
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100%" }}>
            <header>
              <NaviBar />
              {/* <div className="detail-img-layout">
                <div className="detail-leader-container">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        // position: "absolute",
                        width: 78,
                        height: 78,
                        border: "solid 2.5px #4c8597",
                        backgroundColor: "#6fa9bb",
                        borderRadius: 50,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: 45,
                        height: 45,
                        border: "solid 2.5px #4c8597",
                        backgroundColor: "#fff",
                        borderRadius: 50,
                        top: "5vh",
                        left: "4vw",
                      }}
                    />
                  </div>
                  <div>
                    <span>name</span>
                    <span>best score</span>
                  </div>
                  <div>
                    <h3>you can win</h3>
                    <span className="gameItem-pointarea">
                      <div className="gameItem-icon">
                        PP
                      </div>
                      <div className="gameItem-point">
                        point
                      </div>
                    </span>
                  </div>
                </div>
              </div> */}
            </header>
            <div
              style={{
                padding: "174px 0 40px 0",
                boxShadow: "inset 0 1px 0 0 #c4c4c4",
              }}
            >
              <div className="prize-title-layout">
                <p
                  className="prize-rank-title"
                  style={{ paddingRight: 0 }}
                >
                  no.
                </p>
                <p
                  className="prize-rank-title"
                  style={{
                    textAlign: "left",
                    width: 80,
                    left: "-3%",
                    position: "relative",
                  }}
                >
                  player
                </p>
                <p className="prize-rank-title">score</p>
                <p className="prize-rank-title">prize</p>
              </div>
              {rankInfo !== undefined && (
                <>
                  {rankInfo.map((info, index) => (
                    <>
                      <div style={{ padding: "0 16px" }}>
                        <div
                          className="prize-rank-layout"
                          style={
                            {
                              // backgroundColor:
                              //   index % 2
                              //     ? "#fff"
                              //     : "#eaf2f4",
                            }
                          }
                        >
                          <p
                            className="prize-rank-text"
                            style={{
                              width: 60,
                              textAlign: "left",
                            }}
                          >
                            {index + 1}
                          </p>
                          <p
                            className="prize-rank-text"
                            // style={{ marginLeft: 15 }}
                          >
                            {info.username}
                          </p>
                          <p
                            className="prize-rank-text"
                            style={{
                              width: 150,
                              textAlign: "center",
                            }}
                          >
                            {info.score}
                          </p>
                          <p
                            className="prize-rank-text"
                            style={{
                              width: 50,
                              textAlign: "right",
                            }}
                          >
                            {info.prize}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
            <div
              style={{
                position: "fixed",
                width: "100%",
                maxWidth: "690px",
                bottom: 0,
                height: 82,
                opacity: 0.5,
                backgroundColor: "#fff",
                backgroundImage:
                  "linear-gradient(to top, #fff 110%, rgba(255, 255, 255, 0) 21%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
