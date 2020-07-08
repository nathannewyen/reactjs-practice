import React from "react";

const Form = ({ firstName, lastName, handleFirst, handleLast, addUser }) => {
  return (
    <form onSubmit={(e) => addUser(e)}>
      {/* First Name */}
      <div className="form-group row">
        <label htmlFor="first name" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={(e) => handleFirst(e.target.value)}
          ></input>
        </div>
      </div>

      {/* Last Name */}
      <div className="form-group row">
        <label htmlFor="last name" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={(e) => handleLast(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="btn btn-primary float-right">Sign Up</button>
    </form>
  );
};

export default Form;
