//name, email, phone number

import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      phone: "",
    };
    this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { userName, email, phone } = this.state;
    const { isEditing } = this.props;

    return (
      <div className="section">
        <h1 className="subtitle">General</h1>
        <form>
          {isEditing ? (
            <div className="inputContainer">
              <label htmlFor="userName">Name:</label>
              <input
                name="userName"
                type="text"
                className="userName"
                value={userName}
                onChange={this.handleChange}
              />
              <label htmlFor="email">E-mail:</label>
              <input
                name="email"
                type="text"
                className="email"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                name="phone"
                type="text"
                className="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div className="userInput general">
              <text>Name: {userName}</text>
              <text>E-mail: {email}</text>
              <text>Phone Number: {phone}</text>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default General;
