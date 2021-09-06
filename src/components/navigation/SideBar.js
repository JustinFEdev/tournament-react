import React, { useState } from "react";
import PropTypes from "prop-types";

const SideBar = (props) => {
  // const [btnres, setBtnres] = useState();
  console.log("perent data 넘겨받음");
  console.log(props);

  // const switchBtn = (e) => {
  //   e.preventDefault();
  //   setBtnres(false);
  // };
  // console.log("btnres 넘겨줌");
  // console.log(btnres);

  return (
    <>
      <div
        style={{
          position: "absolute",
          border: "1px solid",
          height: "100%",
          width: "100%",
          backgroundColor: "lightgray",
          top: 0,
        }}
      >
        <div>Side Bar</div>
        <button
          type="button"
          onClick={() => props.btnSwitch(false)}
        >
          btnSwitch Off
        </button>
      </div>
    </>
  );
};

export default SideBar;
// SideBar.prototype = {
//   btnSwitch: PropTypes.arrayOf(PropTypes.bool),
// };
