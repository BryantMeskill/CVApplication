import React from "react";
import logo from "../img/github.png";

class Footer extends React.Component {
  render() {
    return (
      <div id="footerDiv">
        <text>
          <img src={logo} alt="GitHub logo" />
          /BryantMeskill
        </text>
      </div>
    );
  }
}

export default Footer;
