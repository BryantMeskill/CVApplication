import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    this.toggleIsEditing.bind(this);
  }

  toggleIsEditing = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  render() {
    const { isEditing } = this.state;
    return (
      <div>
        <button onClick={this.toggleIsEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <Header />
        <General isEditing={isEditing} />
        <Education isEditing={isEditing} />
        {/* <Experience /> */}
      </div>
    );
  }
}

export default App;
