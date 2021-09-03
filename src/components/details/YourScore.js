import React from "react";
import NaviBar from "../navigation/NaviBar";
import "../layout.scss";
import "./details.scss";

const YourScore = () => {
  const PlayaginHandle = () => {
    console.log("Play Again!");
  };
  const ShareScoreHandle = () => {
    console.log("Share Score!");
  };

  return (
    <>
      <div
        className="main-container"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#2a6a80",
            opacity: 0.65,
            width: 690,
            height: "100%",
            // margin: "84px 0 73px",
            zIndex: 1,
          }}
        />
        <div className="main-wrapper">
          <header>
            <NaviBar />
          </header>
          <div
            style={{
              height: "100%",
              padding: "200px 30px 100px 30px",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 5,
                width: 626,
                height: 477,
                borderRadius: 12.5,
                // marginTop: 200,
                boxShadow:
                  "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                border: "solid 2.5px #86b1be",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 168,
                    height: 168,
                    //   margin: "0 229px 358px",
                    // padding: "5px 5px 5px 4px",
                    borderRadius: 12,
                    boxShadow:
                      "0 10px 10px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2px #86b1be",
                    backgroundColor: "#c9e2ea",
                    top: -100,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: "#09607b",
                    }}
                  >
                    Your Score
                  </p>
                  <p
                    style={{
                      fontSize: 56,
                      fontWeight: 800,
                      color: "#09607b",
                      margin: "14px 0 30px 0",
                    }}
                  >
                    point number
                  </p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#4f9db5",
                      textTransform: "uppercase",
                    }}
                  >
                    best 1231213
                  </p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#09607b",
                      marginTop: 45,
                      textTransform: "uppercase",
                    }}
                  >
                    You can win
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: 490,
                    height: 108,
                    borderRadius: 12,
                    boxShadow:
                      "0 10px 10px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2.5px #149231",
                    backgroundColor: "#65c17a",
                    bottom: -70,
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 38,
                    fontWeight: "bold",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={PlayaginHandle}
                >
                  play again
                </div>
              </div>
              <div
                style={{
                  zIndex: 120,
                  height: "230px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 36,
                    fontSize: 30,
                    fontWeight: "bold",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    border: "none",
                    backgroundColor:
                      "rgba( 255, 255, 255, 0.5 );",
                    opacity: 0.62,
                    color: "#fff",
                  }}
                  onClick={ShareScoreHandle}
                >
                  share score
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid",
                height: 400,
                marginTop: 373,
                position: "relative",
                zIndex: 1,
              }}
            >
              <p
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 25,
                }}
              >
                Tournament Leaderboard
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 533,
                    height: 91,
                    borderRadius: 12.5,
                    opacity: 0.75,
                    boxShadow:
                      "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2.5px #00a9dd",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                >
                  top
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  top: 85,
                  height: 108,
                  //   margin: "109px 0 108px",
                  padding: "15px 25px",
                  borderRadius: 12.5,
                  boxShadow:
                    "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                  border: "solid 2.5px #00a9dd",
                  backgroundColor: "#fff",
                }}
              >
                mid
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 25,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 533,
                    height: 91,
                    borderRadius: 12.5,
                    opacity: 0.75,
                    boxShadow:
                      "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
                    border: "solid 2.5px #00a9dd",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  bottom
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 800,
                color: "#fff",
                zIndex: 1,
                marginTop: 25,
              }}
            >
              <a href="/leaderboard">Full Ranking</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourScore;
