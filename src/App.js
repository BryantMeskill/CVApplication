import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
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
      <div id="section">
        <Header />
        <General isEditing={isEditing} />
        <Education isEditing={isEditing} />
        <Experience isEditing={isEditing} />
        <button id="submit" onClick={this.toggleIsEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
