import React from "react";
import Slider from "react-slick";
import "../navigation/navi.scss";
import "./slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LiveSlide = ({ live }) => {
  const liveSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
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
                  <div className="live-livestatus">
                    {info.live}
                  </div>
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
                      {/* Bit Miner */}
                      {info.title}
                    </span>
                    <br />
                    <span>icon</span>
                    <span>{info.number}</span>
                    <span>watch</span>
                  </div>
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
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default LiveSlide;