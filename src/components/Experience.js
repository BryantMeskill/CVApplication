import React, { useState } from "react";

const Experience = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    tasks: "",
    worked: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {isEditing ? (
        <form className="inputContainer">
          <h1 className="subtitle">Experience</h1>
          <label htmlFor="company">Company Name:</label>
          <input
            name="company"
            className="company"
            value={formData.company}
            onChange={handleFormChange}
          />
          <label htmlFor="position">Position/Title: </label>
          <input
            name="position"
            className="position"
            value={formData.position}
            onChange={handleFormChange}
          />
          <label htmlFor="tasks">Job Duties: </label>
          <input
            name="tasks"
            className="tasks"
            value={formData.tasks}
            onChange={handleFormChange}
          />
          <label htmlFor="worked">Year(s) Worked: </label>
          <input
            name="worked"
            className="worked"
            value={formData.worked}
            onChange={handleFormChange}
          />
        </form>
      ) : (
        <div className="output experience">
          <h2 className="subtitleOutput">Experience</h2>
          <span>
            <b>{formData.position}</b>
          </span>
          <span>
            <em>{formData.company}</em> {formData.worked}
          </span>
          <span>
            <b>Duties:</b> {formData.tasks}
          </span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Experience;

//company name, position title, main tasks of your jobs,
// //date from and until when you worked for that company
// import React from "react";
// class Experience extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { company: "", position: "", tasks: "", worked: "" };

//     this.handleChange.bind(this);
//   }

//   handleChange = (e) => {};

//   render() {
//     const { isEditing } = this.props;
//     const { company, position, tasks, worked } = this.state;
//     return (
//       <div className="section">
//         <h1 className="subtitle">Experience</h1>
//         <form>
//           {isEditing ? (
//             <div className="inputContainer">
//               <label htmlFor="company">Company Name:</label>
//               <input
//                 className="company"
//                 value={company.value}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="position">Positon/Title:</label>
//               <input
//                 className="position"
//                 value={position.value}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="tasks">Job Duties:</label>
//               <input
//                 className="tasks"
//                 value={tasks.value}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="worked">Year(s) Worked:</label>
//               <input
//                 className="worked"
//                 value={worked.value}
//                 onChange={this.handleChange}
//               />
//             </div>
//           ) : (
//             <div className="userInput experience">
//               <text>Company Name: {company}</text>
//               <text>Position/Title: {position}</text>
//               <text>Job Duties: {tasks}</text>
//               <text>Year(s) Worked: {worked}</text>
//             </div>
//           )}
//         </form>
//       </div>
//     );
//   }
// }
// export default Experience;
