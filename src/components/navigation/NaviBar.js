import React, { useState } from "react";
import { useLocation } from "react-router";
import SideBar from "./SideBar";
import "./navi.scss";

const NaviBar = ({ onClick, theme }) => {
  const pathName = useLocation().pathname;
  const [menubtn, setMenubtn] = useState(false);
  const titles = [
    { name: "main", path: "/" },
    { name: "completed", path: "/completed" },
    { name: "allgames", path: "/allgames" },
    { name: "allrank", path: "/allrank" },
    { name: "smash", path: "/smash" },
    { name: "leaderboard", path: "/leaderboard" },
    { name: "yourscore", path: "/yourscore" },
  ];
  console.log("theme");
  console.log(theme);
  return (
    <>
      {titles.map((title, index) => {
        return (
          <>
            {title.path === pathName && (
              <>
                {/* main page  */}
                {pathName === "/" && (
                  <>
                    <div className="navi-container">
                      <button
                        onClick={() => setMenubtn(true)}
                      >
                        Menu
                      </button>
                      <a href="/yourscore">Your Score</a>
                      <div
                        onClick={onClick}
                        style={{
                          width: 150,
                          height: 50,
                          border: "1px solid",
                          display: "flex",
                          alignItems: "center",
                          // justifyContent:
                          //   theme === "light"
                          //     ? "flex-start"
                          //     : "flex-end",
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
                                theme === "light"
                                  ? 0
                                  : "50%",
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
                                theme === "light"
                                  ? 0
                                  : "50%",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Light Mode
                          </div>
                        )}
                      </div>
                      <div className="navi-content-container">
                        <div className="navi-pointwrapper">
                          <span className="navi-insideball">
                            PP
                          </span>
                          <span>number</span>
                        </div>
                        <div className="navi-pointwrapper">
                          <span
                            className="navi-insideball"
                            style={{
                              backgroundColor: "#ffb400",
                              opacity: 0.78,
                              border:
                                " solid 1.5px #ff9600",
                            }}
                          >
                            T
                          </span>
                          <span>number</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {menubtn === true && (
                  <>
                    <SideBar
                      btnSwitch={(menubtn) =>
                        setMenubtn(menubtn)
                      }
                    />
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
        );
      })}
    </>
  );
};

export default NaviBar;
