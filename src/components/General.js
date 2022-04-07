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
      //should allow us to use a single handleChange method for all onChange listeners
      //but isn't working
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { userName, email, phone } = this.state;
    const { isEditing } = this.props;

    return (
      <div id="section">
        <h1>General</h1>
        <form>
          {isEditing ? (
            <div id="form">
              <label htmlFor="userName">Name:</label>
              <input
                type="text"
                id="userName"
                //doesn't show text in input unless .value is added?
                value={userName.value}
                onChange={this.handleChange}
              />
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                value={email.value}
                onChange={this.handleChange}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone.value}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div>
              {userName}
              {email}
              {phone}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default General;
