//school name, title of study, date of study
import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      major: "",
      date: "",
    };
  }

  handleChange = (e) => {};

  render() {
    const { school, major, date } = this.state;
    const { isEditing } = this.props;
    return (
      <div className="section">
        <h1 className="subtitle">Education</h1>
        <form>
          {isEditing ? (
            <div className="inputContainer">
              <label type="text" htmlFor="school">
                University Name/Highschool or Equivalent:
              </label>
              <input
                className="school"
                value={school.value}
                onChange={this.handleChange}
              />
              <label type="text" htmlFor="major">
                Major/Expertise:
              </label>
              <input
                className="major"
                value={major.value}
                onChange={this.handleChange}
              />
              <label type="text" htmlFor="date">
                Date(s) attended:
              </label>
              <input
                className="date"
                value={date.value}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div className="userInput education">
              <text>University Name/Highschool or Equivalent: {school}</text>
              <text>Major/Expertise: {major}</text>
              <text>Date(s) attended: {date}</text>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Education;
