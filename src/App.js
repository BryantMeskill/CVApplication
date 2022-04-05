import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id="title">Curriculum Vitae</h1>
        {/* <General />
        <Education />
        <Experience /> */}
      </div>
    );
  }
}

export default App;
