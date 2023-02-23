import React from "react";

function Switch(props) {
  const { system, toggleSystem } = props;

  return (
    <div className="form-check mb-3">
      <label htmlFor="toggleSystem" className="form-check-label">
        Usar sistema métrico
      </label>
      <label className="form-switch mx-3">
        <input
          type="checkbox"
          checked={system === "imperial"}
          onChange={toggleSystem}
          className="form-check-input"
          id="toggleSystem"
        />
        <span className="slider round"></span>
      </label>
      <label htmlFor="toggleSystem" className="form-check-label">
        Usar sistema imperial
      </label>
    </div>
  );
}

export default Switch;
