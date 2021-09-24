import React, { useState } from "react";
import { useLocation } from "react-router";
import SideBar from "./SideBar";
import PropTypes from "prop-types";
import { AddComma } from "../Main";
import NaviIcon from "../../resource/icons/navi@2x.png";
import "./navi.scss";

const NaviBar = ({ onClick, theme, sizeStatus }) => {
  const pathName = useLocation().pathname;
  const [menubtn, setMenubtn] = useState(false);
  const titles = [
    { name: "tournament", path: "/" || "/main" },
    { name: "completed", path: "/completed" },
    { name: "allgames", path: "/allgames" },
    { name: "allrank", path: "/allrank" },
    { name: "smash", path: "/smash" },
    { name: "leaderboard", path: "/leaderboard" },
    { name: "yourscore", path: "/yourscore" },
  ];
  return (
    <>
      {titles.map((title, index) => (
        <>
          {title.path === pathName && (
            <>
              {/* main page  */}
              {pathName === "/" && (
                <>
                  <div className="navi-container">
                    <div
                      className="navi-wrapper"
                      index={index}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={NaviIcon}
                          alt="menu-button"
                          onClick={() => setMenubtn(true)}
                          style={{
                            cursor: "pointer",
                            width: 21,
                            height: 11,
                            objectFit: "cover",
                            color: "var(--neutral-3)",
                          }}
                        />
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
                            {AddComma(2000)}
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
                            {AddComma(2000)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* 비로그인시 알림창  */}
                    <div className="navi-signstatus">
                      <a href="/" style={{ color: "#fff" }}>
                        Sign up and get 300PP/4Ticket.
                      </a>
                    </div>
                  </div>
                </>
              )}
              {/* 사이드 메뉴바  */}
              {menubtn && (
                <>
                  <SideBar
                    sizeStatus={sizeStatus}
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
      ))}
    </>
  );
};

export default NaviBar;
NaviBar.prototype = {
  sizeStatus: PropTypes.arrayOf(PropTypes.number),
};
