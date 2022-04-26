import React, { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./styles/app.css";

const App = () => {
  const [isEditing, setIsEditing] = useState(true);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="section">
      <Header />
      <div className={`${isEditing ? "" : "wrapper"}`}>
        <General isEditing={isEditing} />
        <Skills isEditing={isEditing} />
        <Experience isEditing={isEditing} />
        <Education isEditing={isEditing} />
      </div>
      <button className="submit" onClick={toggleIsEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <Footer />
    </div>
  );
};

// import React from "react";
// import Header from "./components/Header";
// import General from "./components/General";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
// import "./styles/app.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditing: true,
//     };
//     this.toggleIsEditing.bind(this);
//   }

//   toggleIsEditing = () => {
//     this.setState((prevState) => ({
//       isEditing: !prevState.isEditing,
//     }));
//   };

//   render() {
//     const { isEditing } = this.state;
//     return (
//       <div className="section">
//         <Header />
//         <General isEditing={isEditing} />
//         <Education isEditing={isEditing} />
//         <Experience isEditing={isEditing} />
//         <button className="submit" onClick={this.toggleIsEditing}>
//           {isEditing ? "Save" : "Edit"}
//         </button>
//         <Footer />
//       </div>
//     );
//   }
// }

export default App;
