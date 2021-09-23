import React, { useState } from "react";
import { useLocation } from "react-router";
import SideBar from "./SideBar";
import PropTypes from "prop-types";

import "./navi.scss";

const NaviBar = ({ onClick, theme, sizeStatus }) => {
  const pathName = useLocation().pathname;
  const [menubtn, setMenubtn] = useState(false);
  // console.log("navibar-menubtn");
  // console.log(menubtn);
  const titles = [
    { name: "tournament", path: "/" || "/main" },
    { name: "completed", path: "/completed" },
    { name: "allgames", path: "/allgames" },
    { name: "allrank", path: "/allrank" },
    { name: "smash", path: "/smash" },
    { name: "leaderboard", path: "/leaderboard" },
    { name: "yourscore", path: "/yourscore" },
  ];
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  // }, []);
  // console.log("theme");
  // console.log(theme);
  return (
    <>
      {titles.map((title, index) => (
        <>
          {title.path === pathName && (
            <>
              {/* main page  */}
              {pathName === "/" && (
                <>
                  <div
                    className="navi-container"
                    index={index}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <button
                        onClick={() => setMenubtn(true)}
                      >
                        Menu
                      </button>
                      <p
                        style={{
                          marginLeft: 25,
                          textTransform: "capitalize",
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "var(--neutral-1)",
                        }}
                      >
                        {title.name}
                      </p>
                    </div>
                    {/* 임시 스코어경로 라우팅 */}
                    {/* <a href="/yourscore">Your Score</a> */}
                    {/* dark mode */}
                    {/* <div
                      onClick={onClick}
                      style={{
                        width: 150,
                        height: 50,
                        border: "1px solid",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {theme === "light" ? (
                        <div
                          style={{
                            position: "relative",
                            height: "100%",
                            backgroundColor: "#000",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 15,
                            display: "flex",
                            alignItems: "center",
                            animationDuration: "2s",
                            transition: "1s",
                            right:
                              theme === "light" ? 0 : "50%",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                        >
                          Dark Mode
                        </div>
                      ) : (
                        <div
                          style={{
                            position: "relative",
                            height: "100%",
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: 15,
                            display: "flex",
                            alignItems: "center",
                            animationDuration: "0.8s",
                            transition: "1s",
                            left:
                              theme === "light" ? 0 : "50%",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                        >
                          Light Mode
                        </div>
                      )}
                    </div> */}
                    {/* 점수 & 유저수 현황 */}
                    <div className="navi-content-container">
                      <div className="navi-pointwrapper">
                        <span className="navi-insideball">
                          PP
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#1b202a",
                          }}
                        >
                          2000
                        </span>
                      </div>
                      <div className="navi-pointwrapper">
                        <span
                          className="navi-insideball"
                          style={{
                            backgroundColor: "#ffb400",
                          }}
                        >
                          T
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#1b202a",
                          }}
                        >
                          2000
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {menubtn && (
                <>
                  <div
                    style={{
                      // position: "absolute",
                      overflow: "hidden",
                      maxWidth: 690,
                      width: "100%",
                    }}
                  >
                    <SideBar
                      sizeStatus={sizeStatus}
                      btnSwitch={(menubtn) =>
                        setMenubtn(menubtn)
                      }
                    />
                  </div>
                </>
              )}

              {/* title */}
              {pathName === "/allgames" ? (
                <>
                  <div className="navi-title-container">
                    <div style={{ float: "left" }}>
                      <a href="/" key={index}>
                        <h3>
                          {pathName === title.path &&
                            " < " + title.name}
                        </h3>
                      </a>
                    </div>
                  </div>
                </>
              ) : pathName === "/completed" ? (
                <div className="navi-title-container">
                  <div style={{ float: "left" }}>
                    <a href="/" key={index}>
                      <h3>
                        {pathName === title.path &&
                          " < " + title.name}
                      </h3>
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* opacity */}
              {pathName === "/smash" ? (
                <>
                  <div className="navi-opac-container">
                    <div style={{ float: "left" }}>
                      <a href="/" key={index}>
                        <h3>
                          {pathName === title.path &&
                            " < " + title.name}
                        </h3>
                      </a>
                    </div>
                  </div>
                </>
              ) : pathName === "/allrank" ? (
                <div className="navi-opac-container">
                  <div style={{ float: "left" }}>
                    <a href="/" key={index}>
                      <h3>
                        {pathName === title.path &&
                          " < " + title.name}
                      </h3>
                    </a>
                  </div>
                </div>
              ) : pathName === "/leaderboard" ? (
                <div className="navi-opac-container">
                  <div style={{ float: "left" }}>
                    <a href="/" key={index}>
                      <h3>
                        {pathName === title.path &&
                          " < " + title.name}
                      </h3>
                    </a>
                  </div>
                </div>
              ) : pathName === "/yourscore" ? (
                <div className="navi-opac-container">
                  <div
                    style={{
                      float: "left",
                      padding: "0 30px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <a href="/" key={index}>
                      <h3>
                        {pathName === title.path && "X"}
                      </h3>
                    </a>
                    <div className="navi-pointwrapper">
                      <span
                        style={{
                          width: 34,
                          height: 34,
                          backgroundColor: "#38ae53",
                          margin: " 0 5px 0 0 ",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 25,
                        }}
                      >
                        <div
                          style={{
                            margin: "auto",
                            fontSize: 22,
                            fontWeight: 800,
                            display: "flex",
                            height: "88%",
                            alignItems: "flex-end",
                          }}
                        >
                          PP
                        </div>
                      </span>
                      <span>number</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </>
      ))}
    </>
  );
};

export default NaviBar;
NaviBar.prototype = {
  sizeStatus: PropTypes.arrayOf(PropTypes.number),
};
