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
        <h1>Experience</h1>
        <form>
          {isEditing ? (
            <div id="form">
              <label htmlFor="company">Company:</label>
              <input
                id="company"
                value={company.value}
                onChange={this.handleChange}
              />
              <label htmlFor="position">Positon:</label>
              <input
                id="position"
                value={position.value}
                onChange={this.handleChange}
              />
              <label htmlFor="tasks">Tasks of your job:</label>
              <input
                id="tasks"
                value={tasks.value}
                onChange={this.handleChange}
              />
              <label htmlFor="worked">Years Worked:</label>
              <input
                id="worked"
                value={worked.value}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div>
              {company}
              {position}
              {tasks}
              {worked}
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default Experience;
