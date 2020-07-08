import React from "react";

const Form = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  handleFirst,
  handleLast,
  handleEmail,
  handlePassword,
  handleConfirmPassword,
  addUser,
}) => {
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

      {/* Email */}
      <div className="form-group row">
        <label for="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
          ></input>
        </div>
      </div>

      {/* Password */}
      <div className="form-group row">
        <label for="pw" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
          ></input>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="form-group row">
        <label for="confirm-pw" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleConfirmPassword(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="btn btn-primary float-right">Sign Up</button>
    </form>
  );
};

export default Form;
