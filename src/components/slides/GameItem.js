import React from "react";
import PropTypes from "prop-types";
import "./slide.scss";

const GameItem = ({ menuData, gameType, limitNum }) => {
  console.log("menuData로 도착");
  console.log(menuData);
  console.log(gameType);
  console.log("limitNum");
  console.log(limitNum);

  const sliced = menuData.slice(0, 50);
  console.log("sliced");
  console.log(sliced);

  return (
    <>
      {menuData !== undefined && (
        <>
          {limitNum === true ? (
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
                                PP
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
                            <div className="gameItem-icon">
                              PP
                            </div>
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
