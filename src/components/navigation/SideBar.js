import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./navi.scss";
import "../layout.scss";

const Overlay = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0);
  opacity: 0.68;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const SideBar = (props) => {
  console.log("props.menubtn");
  console.log(props);

  const sideData = [
    "point shop",
    "refferal code",
    "terms of use",
    "privacy policy",
    "faq",
    "logout",
  ];
  // useLayoutEffect(() => {
  //   console.log("layout effect");
  // }, []);
  useLayoutEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <Overlay onClick={() => props.btnSwitch(false)} />
      <div className="sidebar">
        <div
          style={{
            height: 152,
            backgroundColor: "#93cbdd",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              width: 78,
              height: 78,
              border: "solid 2px #4c8597",
              // backgroundColor: "#6fa9bb",
              borderRadius: 55,
              backgroundColor: "#fff",
              marginRight: 20,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#fff",
              marginRight: 80,
            }}
          >
            user name
          </div>

          <span className="weekly-ppimg-layout">
            <p className="weekly-ppimg-text">PP</p>
          </span>
          <div className="weekly-game-status">point</div>
        </div>
        <div
          style={{
            height: "100%",
            backgroundColor: "#fff",
            padding: "50px 32px",
          }}
        >
          {/* <div
            type="button"
            onClick={() => props.btnSwitch(false)}
          >
            btnSwitch Off
          </div> */}
          {sideData.map((info) => (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "uppercase",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: 50,
                  opacity: 0.78,
                  border: "solid 1.5px #7d7d7d",
                  backgroundColor: "#acacac",
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                  fontFamily: "AppleSDGothicNeo",
                  fontSize: 17.6,
                  fontWeight: 800,
                  color: "#fff",
                  marginRight: 20,
                }}
              >
                ICON
              </div>
              <div
                style={{
                  fontFamily: "AppleSDGothicNeo",
                  fontSize: 32,
                  color: "#09607b",
                  fontWeight: 600,
                }}
              >
                {info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
SideBar.prototype = {
  visible: PropTypes.bool,
};
