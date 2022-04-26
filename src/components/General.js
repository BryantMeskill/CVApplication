import React, { useState } from "react";
//destructure props directly in params list
const General = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    userName: "",
    website: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      //`...formData` is used to store other values
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {isEditing ? (
        <form className="inputContainer">
          <h1 className="subtitle">General</h1>
          <label htmlFor="userName">Name:</label>
          <input
            name="userName"
            value={formData.userName}
            onChange={handleFormChange}
          />
          <label htmlFor="website">Website: </label>
          <input
            name="website"
            value={formData.website}
            onChange={handleFormChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <label htmlFor="phone">Phone: </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
          />
        </form>
      ) : (
        <div className="output general">
          <span className="name">{formData.userName}</span>
          <div className="userOutput">
            <span className="website">{formData.website}</span>
            <span className="email">{formData.email}</span>
            <span className="phone">{formData.phone}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default General;

// //name, email, phone number

// import React from "react";

// class General extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: "",
//       email: "",
//       phone: "",
//     };
//     this.handleChange.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     const { userName, email, phone } = this.state;
//     const { isEditing } = this.props;

//     return (
//       <div className="section">
//         <h1 className="subtitle">General</h1>
//         <form>
//           {isEditing ? (
//             <div className="inputContainer">
//               <label htmlFor="userName">Name:</label>
//               <input
//                 name="userName"
//                 type="text"
//                 className="userName"
//                 value={userName}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="email">E-mail:</label>
//               <input
//                 name="email"
//                 type="text"
//                 className="email"
//                 value={email}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="phone">Phone Number:</label>
//               <input
//                 name="phone"
//                 type="text"
//                 className="phone"
//                 value={phone}
//                 onChange={this.handleChange}
//               />
//             </div>
//           ) : (
//             <div className="userInput general">
//               <text>Name: {userName}</text>
//               <text>E-mail: {email}</text>
//               <text>Phone Number: {phone}</text>
//             </div>
//           )}
//         </form>
//       </div>
//     );
//   }
// }
