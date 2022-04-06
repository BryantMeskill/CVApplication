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
      <div id="section">
        <h1>Education</h1>
        <form>
          {isEditing ? (
            <div>
              <label type="text" htmlFor="school">
                University Name/Highschool or Equivalent:
              </label>
              <input
                id="school"
                value={school.value}
                onChange={this.handleChange}
              />
              <label type="text" htmlFor="major">
                Major/Expertise:
              </label>
              <input
                id="major"
                value={major.value}
                onChange={this.handleChange}
              />
              <label type="text" htmlFor="date">
                Date(s) attended:
              </label>
              <input
                id="date"
                value={date.value}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div>
              {school}
              {major}
              {date}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Education;
