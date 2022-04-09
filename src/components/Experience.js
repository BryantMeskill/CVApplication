//company name, position title, main tasks of your jobs,
//date from and until when you worked for that company
import React from "react";
class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = { company: "", position: "", tasks: "", worked: "" };

    this.handleChange.bind(this);
  }

  handleChange = (e) => {};

  render() {
    const { isEditing } = this.props;
    const { company, position, tasks, worked } = this.state;
    return (
      <div id="section">
        <h1 id="subtitle">Experience</h1>
        <form>
          {isEditing ? (
            <div id="inputContainer">
              <label htmlFor="company">Company Name:</label>
              <input
                id="company"
                value={company.value}
                onChange={this.handleChange}
              />
              <label htmlFor="position">Positon/Title:</label>
              <input
                id="position"
                value={position.value}
                onChange={this.handleChange}
              />
              <label htmlFor="tasks">Job Duties:</label>
              <input
                id="tasks"
                value={tasks.value}
                onChange={this.handleChange}
              />
              <label htmlFor="worked">Year(s) Worked:</label>
              <input
                id="worked"
                value={worked.value}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div id="userInput">
              <text>Company Name: {company}</text>
              <text>Position/Title: {position}</text>
              <text>Job Duties: {tasks}</text>
              <text>Year(s) Worked: {worked}</text>
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default Experience;
