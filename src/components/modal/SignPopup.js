import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SignPopup = () => {
  const [activePopup, setActivePopup] = useState(true);

  const Overlay = styled.div`
    position: fixed;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "fixed",
                width: 500,
                border: "1px solid",
                backgroundColor: "#fff",
                zIndex: 1001,
                top: "32%",
              }}
            >
              <div
                style={{
                  padding: 18,
                }}
              >
                <h1>Connect Wallet</h1>
                <h3 style={{ border: "1px solid" }}>
                  METAMASK
                </h3>
                <h3 style={{ border: "1px solid" }}>
                  coinbase
                </h3>
                <h3 style={{ border: "1px solid" }}>
                  portis
                </h3>
                <div
                  style={{
                    padding: "15px 0",
                    cursor: "pointer",
                    fontWeight: 800,
                    fontSize: 25,
                    backgroundColor: "lightblue",
                    borderRadius: 25,
                    border: "none",
                  }}
                  onClick={() => setActivePopup(false)}
                >
                  guest mode
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignPopup;
