import React, { useState } from "react";

const Education = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    school: "",
    major: "",
    date: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="section">
      <h1 className="subtitle">Education</h1>
      {isEditing ? (
        <form className="inputContainer">
          <label htmlFor="school">
            University Name/Highschool or Equivalent:
          </label>
          <input
            name="school"
            className="school"
            value={formData.school}
            onChange={handleFormChange}
          />
          <label htmlFor="major">Major/Expertise: </label>
          <input
            name="major"
            className="major"
            value={formData.major}
            onChange={handleFormChange}
          />
          <label htmlFor="date">Date(s) attended: </label>
          <input
            name="date"
            className="date"
            value={formData.date}
            onChange={handleFormChange}
          />
        </form>
      ) : (
        <div className="userInput general">
          <span>
            University Name/Highschool or Equivalent: {formData.school}
          </span>
          <span>Major/Expertise: {formData.major}</span>
          <span>Date(s) attended: {formData.date}</span>
        </div>
      )}
    </div>
  );
};

export default Education;

//school name, title of study, date of study
// import React from "react";

// class Education extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       school: "",
//       major: "",
//       date: "",
//     };
//   }

//   handleChange = (e) => {};

//   render() {
//     const { school, major, date } = this.state;
//     const { isEditing } = this.props;
//     return (
//       <div className="section">
//         <h1 className="subtitle">Education</h1>
//         <form>
//           {isEditing ? (
//             <div className="inputContainer">
//               <label type="text" htmlFor="school">
//                 University Name/Highschool or Equivalent:
//               </label>
//               <input
//                 className="school"
//                 value={school.value}
//                 onChange={this.handleChange}
//               />
//               <label type="text" htmlFor="major">
//                 Major/Expertise:
//               </label>
//               <input
//                 className="major"
//                 value={major.value}
//                 onChange={this.handleChange}
//               />
//               <label type="text" htmlFor="date">
//                 Date(s) attended:
//               </label>
//               <input
//                 className="date"
//                 value={date.value}
//                 onChange={this.handleChange}
//               />
//             </div>
//           ) : (
//             <div className="userInput education">
//               <text>University Name/Highschool or Equivalent: {school}</text>
//               <text>Major/Expertise: {major}</text>
//               <text>Date(s) attended: {date}</text>
//             </div>
//           )}
//         </form>
//       </div>
//     );
//   }
// }

// export default Education;
