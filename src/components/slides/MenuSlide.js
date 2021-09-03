// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import "../layout.scss";

// const MenuSlide = ({ pickMenu }) => {

//   return (
//     <>
//       <div>
//         <button
//           onClick={() => setAllItem(!allItem)}
//           className="menu-selector"
//         >
//           All Games
//         </button>
//       </div>
//       {pickMenu.map((info) => (
//         <>
//           <div
//             style={{
//               display: "inline-flex",
//               width: "100%",
//               marginLeft: 25,
//             }}
//           >
//             <button
//               type="button"
//               onClick={() => setGameType(info.type)}
//               className="menu-selector-sub"
//               style={{
//                 border:
//                   gameType === info.type
//                     ? "solid 2.5px black"
//                     : "solid 2.5px #77b5c9",
//                 color:
//                   gameType === info.type
//                     ? "black"
//                     : "#77b5c9",
//                 padding: "0px ​10px",
//                 textTransform: "capitalize",
//               }}
//             >
//               {info.type}
//             </button>
//           </div>
//         </>
//       ))}
//     </>
//   );
// };

// export default MenuSlide;
// MenuSlide.prototype = {
//   pickMenu: PropTypes.arrayOf(PropTypes.object),
//   gameType: PropTypes.arrayOf(PropTypes.object),
// };
// MenuSlide.defaultType = {};
