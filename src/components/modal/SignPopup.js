import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./popup.scss";

const SignPopup = () => {
  const [activePopup, setActivePopup] = useState(true);
  const Overlay = styled.div`
    position: fixed;
    background-color: var(--primay-2-01);
    height: 100%;
    width: 690px;
    top: 0;
    bottom: 0;
    z-index: 1000;
  `;
  useEffect(() => {
    if (activePopup === true) {
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
  }, [activePopup]);
  return (
    <>
      {activePopup === true && (
        <>
          <Overlay />
          {/* onClick={() => setActivePopup(false)}  */}
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ zIndex: 1001, width: "100%" }}>
              <div
                style={{
                  margin: "0 18px",
                  backgroundColor: "#fff",
                  top: "32%",
                  borderRadius: 10,
                  padding: "28px 23px",
                }}
              >
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 32,
                    letterSpacing: "-0.2px",
                    color: "var(--neutral-1)",
                  }}
                >
                  Connect Wallet
                </p>
                <div className="connect-button" style={{}}>
                  <label>
                    <span>ㅁ</span>
                    <span
                      style={{
                        color: "#fff",
                        letterSpacing: "2.5px",
                      }}
                    >
                      METAMASK
                    </span>
                  </label>
                </div>
                <div className="connect-button" style={{}}>
                  <label>
                    <span>ㅁ</span>
                    <span style={{ color: "#fff" }}>
                      coinbase
                    </span>
                  </label>
                </div>
                <div className="connect-button" style={{}}>
                  <label>
                    <span>ㅁ</span>
                    <span style={{ color: "#fff" }}>
                      portis
                    </span>
                  </label>
                </div>
                <div
                  style={{
                    borderTop: "solid 1px #f1f1f5",
                    paddingTop: 10,
                  }}
                >
                  <div
                    style={{
                      padding: "15px 0",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 600,
                      border: "solid 1px #f1f1f5",
                      backgroundColor: "#fafaff",
                      borderRadius: 10,
                      color: "var(--neutral-3)",
                    }}
                    onClick={() => setActivePopup(false)}
                  >
                    Guest Play
                  </div>
                </div>
                <div
                  style={{
                    padding: "22px 0 4px 0",
                    textDecoration: "underline",
                    color: "var(--primay-2-01)",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Need Help?
                </div>
              </div>
              <div
                style={{
                  fontSize: 12,
                  marginTop: 22,
                  letterSpacing: "-0.3px",
                  color: "#f1f1f5",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>Privacy policy</span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: "bolder",
                    margin: "0 5px",
                  }}
                >
                  &#183;
                </span>
                <span>Terms of use</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignPopup;
