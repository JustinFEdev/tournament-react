import React from "react";
import "../navigation/navi.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContinueSlide = ({ conti }) => {
  const contiSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    // useCSS: true,
  };

  return (
    <>
      {conti !== undefined && (
        <>
          <Slider {...contiSettings}>
            {conti.map((info, index) => (
              <>
                <div
                  className="continue-container"
                  key={index}
                >
                  <img
                    className="continue-img"
                    alt={info.img}
                  />
                  <div className="continue-time-wrapper">
                    <span className="continue-time-text">
                      Time :{info.time}
                    </span>
                  </div>
                  <div className="continue-text-wrapper">
                    <div className="continue-playagin">
                      Play Again
                    </div>
                    <div className="continue-wininfo">
                      <span>To Win</span>
                      <span className="pp-wrapper">
                        <div className="pp-text">PP</div>
                      </span>
                      <span>{info.point}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default ContinueSlide;
