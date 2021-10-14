import React from "react";
import NaviBar from "../navigation/NaviBar";
import "../layout.scss";
import "./details.scss";

const YourScore = ({ index }) => {
  const PlayaginHandle = () => {
    console.log("Play Again!");
  };

  const ShareScoreHandle = () => {
    console.log("Share Score!");
  };
  const FullRankingHandle = () => {
    console.log("Full Ranking!");
  };

  return (
    <>
      <div className="main-container">
        {/* <div
          style={{
            position: "absolute",
            backgroundColor: "#2a6a80",
            opacity: 0.65,
            // width: 690,
            height: "100%",
            // margin: "84px 0 73px",
            zIndex: 1,
          }}
        /> */}
        <div
          className="main-wrapper"
          style={{
            backgroundColor: "lightgray",
            opacity: 0.88,
          }}
        >
          <header>
            <NaviBar key={index} />
          </header>
          {/* <div
            style={{
              position: "absolute",
              height: "100%",
              width: "690px",
              backgroundColor: "#2a6a80",
              opacity: 0.65,
            }}
          /> */}
          {/* main layout */}
          <div
            style={{
              minHeight: "83vh",
              height: "100%",
              marginTop: 60,
              padding: "64.5px 16px 0 16px",
            }}
          >
            {/* inside big area */}
            <div
              style={{
                width: "100%",
                // height: 376,
                paddingBottom: 30.5,
                borderRadius: 10,
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              {/* inside top app icon area */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* inside top app icon */}
                <div
                  style={{
                    position: "relative",
                    top: -41.5,
                    width: 83,
                    height: 83,
                    borderRadius: 6.3,
                    boxShadow:
                      "0 5px 5px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 1px #86b1be",
                    backgroundColor: "#c9e2ea",
                  }}
                />
              </div>
              {/* score area */}
              <div
                style={{
                  padding: "0 25px",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    opacity: 0.4,
                    fontWeight: 500,
                    letterSpacing: -0.53,
                    color: "var(--neutral-2)",
                  }}
                >
                  Your Score
                </p>
                <p
                  style={{
                    fontFamily: "AppleSDGothicNeo",
                    fontSize: 26,
                    fontWeight: 800,
                    color: "var(--primay-2-01)",
                    margin: "12px 0 11px 0",
                  }}
                >
                  123456789
                </p>
                <p
                  style={{
                    fontFamily: "AppleSDGothicNeo",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--neutral-3)",
                    textTransform: "uppercase",
                  }}
                >
                  best score
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--neutral-2)",
                    textTransform: "uppercase",
                    margin: "30px 0 18px 0",
                  }}
                >
                  you can win pp point
                </p>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    // 여기까지 같음
                    fontSize: 16,
                    color: "#fff",
                    backgroundColor: "var(--primay-2-01)",
                  }}
                  onClick={PlayaginHandle}
                >
                  Play again
                </div>
                {/* play && share button */}
                <div
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontFamily: "InterV_Semi",
                    textTransform: "capitalize",
                    // 여기까지 같음
                    border: "solid 1px #f1f1f5",
                    fontSize: 14,
                    color: "var(--neutral-2)",
                    backgroundColor: "#fafaff",
                    marginTop: 11.5,
                  }}
                  onClick={ShareScoreHandle}
                >
                  share score
                </div>
              </div>
            </div>
            {/* Tournament leader boord area */}
            <div style={{ marginTop: 42 }}>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--neutral-1)",
                  letterSpacing: -0.1,
                  marginBottom: 13,
                }}
              >
                Tournament Leaderboard
              </p>
              <div>
                <div
                  style={{
                    position: "relative",
                    margin: "0 26px",
                    height: 47,
                    opacity: 0.75,
                    borderRadius: 5.6,
                    boxShadow:
                      "0 6px 6px 0 rgba(77, 93, 107, 0.13)",
                    backgroundColor: "#fff",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    top: 5,
                    padding: "0 10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <p>35</p>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 25,
                        margin: 8,
                        border: "solid 0.6px #4c8597",
                        backgroundColor: "#6fa9bb",
                      }}
                    />
                  </span>
                  <p>point</p>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    zIndex: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        border: "1px solid",
                        borderRadius: 25,
                        marginRight: 21,
                      }}
                    />
                    <div>
                      <p>user name</p>
                      <span
                        className="pp-wrapper"
                        style={{ margin: 0 }}
                      >
                        <div className="pp-text">PP</div>
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: -0.2,
                      color: "var(--neutral-1)",
                    }}
                  >
                    middle
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    margin: "0 26px",
                    height: 47,
                    opacity: 0.75,
                    borderRadius: 5.6,
                    boxShadow:
                      "0 6px 6px 0 rgba(77, 93, 107, 0.13)",
                    backgroundColor: "#fff",
                    zIndex: 1,
                    top: -5,
                  }}
                >
                  bottom
                </div>
              </div>
            </div>
            <div
              onClick={FullRankingHandle}
              style={{
                fontSize: 16,
                fontWeight: 500,
                marginTop: 21.5,
                color: "var(--primay-2-01)",
                textTransform: "capitalize",
              }}
            >
              full ranking
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourScore;
