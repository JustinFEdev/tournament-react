import React from "react";
import { useLocation } from "react-router";
// import SideBar from "./SideBar";
import PropTypes from "prop-types";
import { AddComma } from "../Main";
import NaviIcon from "../../resource/icons/navi@2x.png";
import Point_logo from "../../resource/image/icon-pp@2x.png";
import Ticket_logo from "../../resource/image/icon-ticket@2x.png";

import "./navi.scss";

const NaviBar = () => {
  const pathName = useLocation().pathname;
  // const [menubtn, setMenubtn] = useState(false);
  const titles = [
    { id: 1, name: "tournament", path: "/" || "/main" },
    { id: 2, name: "completed", path: "/completed" },
    { id: 3, name: "allgames", path: "/allgames" },
    { id: 4, name: "allrank", path: "/allrank" },
    { id: 5, name: "smash", path: "/smash" },
    { id: 6, name: "leaderboard", path: "/leaderboard" },
    { id: 7, name: "pricedetail", path: "/pricedetail" },
  ];

  return (
    <>
      {titles.map((title, index) => (
        <>
          {title.path === pathName && (
            <>
              {/* main page  */}
              {pathName === "/" ? (
                <>
                  <div
                    className="navi-container"
                    key={index}
                  >
                    <div className="navi-wrapper">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={NaviIcon}
                          alt="menu-button"
                          // onClick={() => setMenubtn(true)}
                          style={{
                            cursor: "pointer",
                            width: 16,
                            height: 8,
                            objectFit: "cover",
                            color: "var(--neutral-3)",
                          }}
                        />
                        <p
                          style={{
                            marginLeft: 12,
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
                            <img
                              className="navi-point-img"
                              src={Point_logo}
                              alt=""
                            />
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
                        <div className="navi-ticketwrapper">
                          <span className="navi-insideball">
                            <img
                              className="navi-point-img"
                              src={Ticket_logo}
                              alt=""
                            />
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
                    {/* <div className="navi-signstatus">
                      <a href="/" style={{ color: "#fff" }}>
                        Sign up and get 300PP/4Ticket.
                      </a>
                    </div> */}
                  </div>
                </>
              ) : pathName === "/leaderboard" ? (
                <>
                  <div
                    className="navi-container"
                    key={index}
                  >
                    <div className="navi-wrapper">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <a href="/">
                          <img
                            src={NaviIcon}
                            alt="menu-button"
                            style={{
                              cursor: "pointer",
                              width: 16,
                              height: 8,
                              objectFit: "cover",
                              color: "var(--neutral-3)",
                            }}
                          />
                        </a>
                        <p
                          style={{
                            marginLeft: 12,
                            textTransform: "capitalize",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "var(--neutral-1)",
                          }}
                        >
                          {title.name}
                        </p>
                      </div>
                      <div className="navi-content-container">
                        <div className="navi-pointwrapper">
                          <div className="navi-insideball">
                            <span
                              style={{
                                margin: "auto",
                                paddingRight: 2,
                              }}
                            >
                              PP
                            </span>
                          </div>
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
                          <div
                            className="navi-insideball"
                            style={{
                              backgroundColor: "#ffb400",
                            }}
                          >
                            <span
                              style={{
                                margin: "auto",
                                paddingRight: 2,
                              }}
                            >
                              T
                            </span>
                          </div>
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
                  </div>
                  {/* </div> */}
                </>
              ) : pathName === "/pricedetail" ? (
                <div className="navi-container" key={index}>
                  {/* <div className="detail-img-layout" /> */}
                  <div
                    style={{
                      float: "left",
                      padding: "0 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      // boxShadow: "inset 0 -1px 0 0 #f1f1f5",
                      // backgroundColor: "#fff",
                      zIndex: 1001,
                    }}
                  >
                    <a href="/">
                      <h3 style={{ color: "#000" }}>
                        {"<   "}Tournament
                        {/* {pathName === title.path &&
                          `${pathName}`} */}
                      </h3>
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* 사이드 메뉴바  */}
              {/* {menubtn && (
                <>
                  <SideBar
                    sizeStatus={sizeStatus}
                    btnSwitch={(menubtn) =>
                      setMenubtn(menubtn)
                    }
                  />
                </>
              )} */}

              {/* title */}
              {pathName === "/allgames" ? (
                <>
                  <div
                    className="navi-title-container"
                    key={index}
                  >
                    <div style={{ float: "left" }}>
                      <a href="/">
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
                    <a href="/">
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
                  <div
                    className="navi-opac-container"
                    key={index}
                    // style={{ alignItems: "flex-end" }}
                  >
                    <div style={{ float: "left" }}>
                      <a href="/">
                        <h3>
                          {pathName === title.path &&
                            " < " + title.name}
                        </h3>
                      </a>
                    </div>
                  </div>
                </>
              ) : pathName === "/allrank" ? (
                <>
                  <div
                    className="navi-opac-container"
                    style={{
                      height: 174,
                    }}
                    key={index}
                  >
                    <div className="allrank-img-layout" />
                    <div
                      style={{
                        display: "inline-grid",
                        float: "left",
                        padding: "0 16px",
                        width: "100%",
                        height: "100%",
                        zIndex: 10,
                      }}
                    >
                      <a href="/">
                        <h3
                          style={{
                            color: "#fff",
                            float: "left",
                          }}
                        >
                          {"<  "}Full Ranking
                          {/* {pathName === title.path &&
                          `${pathName}`} */}
                        </h3>
                      </a>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          height: 70,
                          borderRadius: 10,
                          padding: "0 16px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              width: 38,
                              height: 38,
                              margin: "1px 10px 0 0",
                              borderRadius: 12,
                              border: "1px solid",
                            }}
                          />
                          <div
                            style={{ textAlign: "left" }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                                letterSpacing: -0.2,
                                color: "var(--neutral-1)",
                                textTransform: "capitalize",
                              }}
                            >
                              name
                            </p>
                            <div
                              style={{
                                display: "inline-flex",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: 12,
                                  letterSpacing: -0.4,
                                  color: "var(--neutral-2)",
                                  marginRight: 5,
                                }}
                              >
                                Best
                              </p>
                              <p
                                style={{
                                  fontSize: 12,
                                  letterSpacing: -0.4,
                                  color: "var(--neutral-2)",
                                }}
                              >
                                7777777
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p
                            style={{
                              fontSize: 12,
                              letterSpacing: -0.4,
                              color: "var(--neutral-2)",
                            }}
                          >
                            You Can Win
                          </p>
                          <p
                            style={{
                              letterSpacing: -0.2,
                              color: "var(--primay-2-01)",
                            }}
                          >
                            123456
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
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
