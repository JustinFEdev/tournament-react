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
  ];

  const menudrower = () => {
    console.log("시원하게 넘어갑시다");
  };

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
                      <div>Menu status</div>
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
