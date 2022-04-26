import React, { useState } from "react";

const Skills = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    strong: "",
    experienced: "",
    tools: "",
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
          <h1 className="subtitle">Skills</h1>
          <label htmlFor="strong">Strong:</label>
          <input
            name="strong"
            className="strong"
            value={formData.strong}
            onChange={handleFormChange}
          />
          <label htmlFor="experienced">Experienced:</label>
          <input
            name="experienced"
            className="experienced"
            value={formData.experienced}
            onChange={handleFormChange}
          />
          <label htmlFor="tools">Tools:</label>
          <input
            name="tools"
            className="tools"
            value={formData.tools}
            onChange={handleFormChange}
          />
        </form>
      ) : (
        <div className="output skills">
          <h2 className="subtitleOutput">Skills</h2>
          <span>
            <b>STRONG:</b> {formData.strong}
          </span>
          <span>
            <b>EXPERIENCED:</b> {formData.experienced}
          </span>
          <span>
            <b>TOOLS:</b> {formData.tools}
          </span>
        </div>
      )}
    </div>
  );
};

export default Skills;
