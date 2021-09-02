import React, { useState, useEffect } from "react";
import "../layout.scss";
import "./details.scss";
import NaviBar from "../navigation/NaviBar";

const LeaderBoard = () => {
  const [rankInfo, setRankInfo] = useState();
  // console.log("상단 rankInfo");
  // console.log(rankInfo);
  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  useEffect(() => {
    const array = [];
    const username = [
      "jack",
      "max",
      "james",
      "raphael",
      "lucas",
      "santiago",
      "alex",
      "park",
      "kim",
      "paul",
      "sam",
      "rachel",
      "lucius",
      "sanchaz",
      "jacky",
      "choi",
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
              <div className="detail-img-layout">
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
                        backgroundColor: "#6fa9bb",
                        borderRadius: 50,
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
              </div>
            </header>
            <div
              style={{
                padding: "60px 33px 140px 33px",
                border: "1px solid",
              }}
            >
              {rankInfo !== undefined && (
                <>
                  {rankInfo.map((info, index) => (
                    <>
                      {index === 0 && (
                        <>
                          <div
                            className="prize-title-layout"
                            style={
                              {
                                // backgroundColor:
                                //   info.oddeven === 1
                                //     ? "#eaf2f4"
                                //     : "#fff",
                              }
                            }
                          >
                            <p className="prize-rank-title">
                              No.
                            </p>
                            <p className="prize-rank-title">
                              PLAYER
                            </p>
                            <p className="prize-rank-title">
                              SCORE
                            </p>
                            <p className="prize-rank-title">
                              PRIZE
                            </p>
                          </div>
                        </>
                      )}
                      <div
                        className="prize-rank-layout"
                        style={
                          {
                            // backgroundColor:
                            //   info.oddeven === 1
                            //     ? "#eaf2f4"
                            //     : "#fff",
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
                          style={{ width: 70 }}
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
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
