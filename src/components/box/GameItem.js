import React from "react";
import PropTypes from "prop-types";
import "./slide.scss";
const GameItem = ({ menuData }) => {
  // console.log("menuData로 도착");
  // console.log(menuData);

  return (
    <>
      {menuData !== undefined && (
        <>
          {menuData.map((info) => (
            <div className="gameItem-container">
              <div className="gameItem-img" alt="">
                img
              </div>
              <div className="gameItem-wrapper">
                <span className="gameItem-pointarea">
                  <div className="gameItem-icon">PP</div>
                  <p className="gameItem-point">
                    {info.point}
                  </p>
                </span>
                <span className="gameItem-userarea">
                  <p className="gameItem-usericon">II</p>
                  <p className="gameItem-number">
                    {info.user}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default GameItem;

GameItem.prototype = {
  menuData: PropTypes.arrayOf(PropTypes.object),
};
GameItem.defaultType = {};
