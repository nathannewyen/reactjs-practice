import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  // Validation Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let person = {
      fname: firstName,
      lname: lastName,
      email: email,
      pw: password,
      confirmpw: confirmPassword,
    };
    props.handleUser((oldUsers) => [...oldUsers, person]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setHasBeenSubmitted(true);
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  const handleFirstError = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters");
    }
  };

  const handleLastError = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>{formMessage()}</h3>
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
            onChange={handleFirstError}
          ></input>

          {firstNameError ? (
            <p style={{ color: "red" }}>{firstNameError}</p>
          ) : (
            ""
          )}
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
            onChange={handleLastError}
          ></input>
          {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
        </div>
      </div>

      {/* Email */}
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>

      {/* Password */}
      <div className="form-group row">
        <label htmlFor="pw" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="form-group row">
        <label htmlFor="confirm-pw" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="btn btn-primary float-right">Sign Up</button>
    </form>
  );
};

export default Form;
