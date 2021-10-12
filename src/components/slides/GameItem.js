import React from "react";
import PropTypes from "prop-types";
import "./slide.scss";

const GameItem = ({ menuData, gameType, limitNum }) => {
  const sliced = menuData.slice(0, 40);
  return (
    <>
      {menuData !== undefined && (
        <>
          {limitNum === false ? (
            <>
              {menuData.map((info, index) => (
                <>
                  <div
                    style={{
                      float: "left",
                      height: "100%",
                    }}
                  >
                    {info.status === gameType && (
                      <>
                        <div
                          className="gameItem-container"
                          key={index}
                        >
                          <div
                            className="gameItem-img"
                            alt=""
                          >
                            img
                          </div>
                          <div className="gameItem-wrapper">
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
                                {info.point}
                              </div>
                            </span>
                            <span className="gameItem-userarea">
                              <div className="gameItem-usericon">
                                II
                              </div>
                              <span className="gameItem-number">
                                {info.user}
                              </span>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              {sliced.map((data, index) => (
                <>
                  {data.status === gameType && (
                    <>
                      <div
                        className="gameItem-container"
                        key={index}
                      >
                        <div
                          className="gameItem-img"
                          alt=""
                        >
                          img
                        </div>
                        <div className="gameItem-wrapper">
                          <span className="gameItem-pointarea">
                            {/* <div className="gameItem-icon">
                              <p
                                style={{ paddingTop: 2.5 }}
                              >
                                PP
                              </p>
                            </div> */}
                            <div className="gameItem-point">
                              {data.point}
                            </div>
                          </span>
                          <span className="gameItem-userarea">
                            <div className="gameItem-usericon">
                              II
                            </div>
                            <span className="gameItem-number">
                              {data.user}
                            </span>
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default GameItem;

GameItem.prototype = {
  menuData: PropTypes.arrayOf(PropTypes.object),
  gameType: PropTypes.arrayOf(PropTypes.object),
  limitNum: PropTypes.arrayOf(PropTypes.bool),
};
GameItem.defaultType = {};
