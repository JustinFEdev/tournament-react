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
    dots:
      // (isBrowser && true) ||
      size > 499 ? true : false,
    // (isMobile && false),
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    useCSS: true,
  };

  return (
    <>
      {live !== undefined && (
        <>
          <Slider {...liveSettings}>
            {live.map((info, index) => (
              <div className="live-container" key={index}>
                <div className="live-wrapper">
                  {/* <div className="live-livestatus">
                    {info.live}
                  </div> */}
                  <div className="live-timestatus">
                    {info.time}
                  </div>
                </div>
                <div className="live-imgarea">
                  <img src={info.img} alt={info.img} />
                </div>
                <div className="live-info-wrapper">
                  <div className="live-info-titlearea">
                    <span className="live-info-title">
                      {info.title}
                    </span>

                    <div className="live-wininfo">
                      <span className="live-win">WIN</span>
                      <span className="pp-wrapper">
                        <p className="pp-text">PP</p>
                      </span>
                      <span className="live-point">
                        {info.point}
                      </span>
                    </div>
                  </div>
                  <div className="live-liveinfo">
                    <div
                      className="live-"
                      style={{
                        borderTop: "1px solid",
                        padding: "20px 0",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          border: "1px solid",
                          padding: "7px",
                          borderRadius: 10,
                          backgroundColor: "red",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        Live
                      </span>
                      <span>People</span>
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
