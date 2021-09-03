import React from "react";
import { useLocation } from "react-router";

import "./navi.scss";

const NaviBar = () => {
  const pathName = useLocation().pathname;

  const titles = [
    { name: "main", path: "/" },
    { name: "completed", path: "/completed" },
    { name: "allgames", path: "/allgames" },
    { name: "allrank", path: "/allrank" },
    { name: "smash", path: "/smash" },
    { name: "leaderboard", path: "/leaderboard" },
    { name: "yourscore", path: "/yourscore" },
  ];

  // const menudrower = () => {
  //   console.log("시원하게 넘어갑시다");
  // };

  return (
    <>
      {titles.map((title, index) => {
        return (
          // <div
          //   className={`${
          //     pathName === title.path ? (
          //       "navi-container"
          //     ) : pathName === title.path ? (
          //       "navi-title-container"
          //     ) : pathName === title.path ? (
          //       "navi-opac-container"
          //     ) : (
          //       <></>
          //     )
          //   }`}
          // >
          <>
            {title.path === pathName && (
              <>
                {pathName === "/" && (
                  <>
                    <div className="navi-container">
                      <a href="/">menu</a>
                      <a href="/yourscore">Menu status</a>
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

                {/* {pathName === "/completed" ? (
                  <div className="navi-title-container">
                    <div style={{ float: "left" }}>
                      <a href="/" key={index}>
                        {pathName === title.path &&
                          title.name}
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )} */}

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
                            // border: "solid 1.5px #149231",
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
          // </div>
        );
      })}
    </>
  );
};

export default NaviBar;
