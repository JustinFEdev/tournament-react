import React from "react";
import Slider from "react-slick";
import "../navigation/navi.scss";
import "./slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { isBrowser, isMobile } from "react-device-detect";

const LiveSlide = ({ live, size }) => {
  // console.log("live로 넘어온 size");
  // console.log(size);
  const liveSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
  };

  return (
    <>
      {live !== undefined && (
        <>
          <Slider {...liveSettings}>
            {live.map((info, index) => (
              <div className="live-container" key={index}>
                <div className="live-imgarea">
                  <div style={{ position: "relative" }}>
                    <div className="live-wrapper">
                      <div className="live-livestatus">
                        {info.status}
                      </div>
                      <div className="live-timestatus">
                        {info.time}
                      </div>
                    </div>
                  </div>
                  <img src={info.img} alt={info.img} />
                </div>
                <div className="live-info-wrapper">
                  <div className="live-info-titlearea">
                    <span className="live-info-title">
                      {info.title}
                    </span>
                    <div
                      style={{
                        padding: "10px 0 0 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: 27,
                          fontSize: 14,
                          display: "flex",
                          alignItems: "center",
                          color: "var(--neutral-3)",
                        }}
                      >
                        <p
                          style={{
                            width: 8,
                            height: 8,
                            margin: "5px 8px 5px 0",
                            backgroundColor: "#e62b2b",
                            borderRadius: 8,
                          }}
                        />
                        <span style={{ marginRight: 5 }}>
                          8.1M
                        </span>
                        <span>People</span>
                      </div>
                      <div className="live-liveinfo">
                        <div className="live-wininfo">
                          <span className="live-win">
                            WIN
                          </span>
                          <span className="pp-wrapper">
                            <p className="pp-text">PP</p>
                          </span>
                          <span className="live-point">
                            {info.point}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default LiveSlide;
