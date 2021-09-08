import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./popup.scss";

const GamePopup = () => {
  const [switchPop, setSwitchPop] = useState(true);

  const Overlay = styled.div`
    position: fixed;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
    height: 100vh;
    width: 690px;
    top: 0;
    bottom: 0;
    z-index: 1000;
  `;

  useEffect(() => {
    if (switchPop === true) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(
          0,
          parseInt(scrollY || "0", 10) * -1
        );
      };
    }
  }, [switchPop]);
  return (
    <>
      {switchPop === true && (
        <>
          <Overlay onClick={() => setSwitchPop(false)} />
          <div className="allgame-popup">
            <div className="allgame-square-img" />
            <div
              // className="allgame-square-img"
              style={{
                width: "100%",
                padding: "0 32px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 45,
                    height: 45,
                    margin: "0 14px 0 0",
                    opacity: 0.78,
                    border: "solid 1.5px #f38f00",
                    backgroundColor: "#ffac00",
                    borderRadius: 35,
                  }}
                />
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "#09607b",
                  }}
                >
                  Tournaments
                </span>
              </div>
              {/* popup data loop area */}
              <div
                style={{
                  height: 152,
                  borderRadius: 12.5,
                  border: "solid 1.3px #a7ccd5",
                  backgroundColor: "#fff",
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span className="gameItem-pointarea">
                    <div className="gameItem-icon">
                      <p
                        style={{
                          paddingTop: 2.5,
                        }}
                      >
                        PP
                      </p>
                    </div>
                    <div className="gameItem-point">
                      .point
                    </div>
                  </span>
                  <span className="gameItem-userarea">
                    <div className="gameItem-usericon">
                      Icon
                    </div>
                    <span className="gameItem-number">
                      .user
                    </span>
                    <div>Info icon</div>
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h1 style={{ margin: 0 }}>time</h1>
                  <div
                    style={{
                      width: 276,
                      height: 65,
                      borderRadius: 7.5,
                      border: "solid 1.5px #149231",
                      backgroundColor: "#65c17a",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: 35,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Join Free
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GamePopup;
