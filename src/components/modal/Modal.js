import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { show, closeModal } = props;

  console.log("show");
  console.log(props.show);
  console.log("closeModal");
  console.log(props.closeModal);
  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

  const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
  const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;
    transition: opacity linear 0.15s;
    animation: ${(props) => (props.show ? fadeOut : fadeIn)} 0.35s linear;
  `;

  const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.86);
    display: flex;
    justify-content: center;
    align-item: center;
    transition: opacity linear 0.15s;
    animation: ${(props) => (props.show ? fadeOut : fadeIn)} 0.35s linear;
  `;

  const Card = styled.div`
    z-index: 100;
    position: relative;
    margin: 0 auto;
    display: block;
    margin-top: 250px;
    width: 800px;
    height: 500px;
    background-color: lightgray;
    border-radius: 5px;
    animation: ${(props) => (props.show ? fadeOut : fadeIn)} 0.35s linear;
  `;

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return show ? (
    <>
      <Wrapper>
        <Overlay onClick={(event) => closeModal(event)} />
        <Card>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZNv5T23rDqs?rel=0&autoplay=1"
            title="DragonBlood"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
          <div
            style={{
              position: "absolute",
              zIndex: 100,
              width: 80,
              height: 50,
              border: "1px solid",
              top: 0,
              right: "-10.5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
            onClick={(event) => closeModal(event)}
          >
            close
          </div>
        </Card>
      </Wrapper>
    </>
  ) : (
    <></>
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeHandle: PropTypes.func.isRequired,
};
