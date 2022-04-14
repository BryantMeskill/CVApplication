import React from "react";
import logo from "../img/github.png";

const Footer = () => {
  return (
    <div className="footerDiv">
      <span>
        <img src={logo} alt="Github Logo" />
        /BryantMeskill
      </span>
    </div>
  );
};

// class Footer extends React.Component {
//   render() {
//     return (
//       <div className="footerDiv">
//         <text>
//           <img src={logo} alt="GitHub logo" />
//           /BryantMeskill
//         </text>
//       </div>
//     );
//   }
// }

export default Footer;
