import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";

const containerStyle = {
  marginTop: "30px",
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let person = {
      fname: firstName,
      lname: lastName,
      email: email,
      pw: password,
      confirmpw: confirmPassword,
    };
    setUser((oldUsers) => [...oldUsers, person]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="container clearfix" style={containerStyle}>
      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleFirst={setFirstName}
        handleLast={setLastName}
        handleEmail={setEmail}
        handlePassword={setPassword}
        handleConfirmPassword={setConfirmPassword}
        addUser={handleSubmit}
      />
      {users.map((user, idx) => {
        return (
          <UserInfo
            firstName={user.fname}
            lastName={user.lname}
            email={user.email}
            password={user.pw}
            confirmPassword={user.confirmpw}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default App;
