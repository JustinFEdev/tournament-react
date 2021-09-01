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
          {menuData
            // .sort(([a], [b]) => a.point - b.point)
            .map((info, index) => (
              <div
                className="gameItem-container"
                key={index}
              >
                <div className="gameItem-img" alt="">
                  img
                </div>
                <div className="gameItem-wrapper">
                  <span className="gameItem-pointarea">
                    <div className="gameItem-icon">PP</div>
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
