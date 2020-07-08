import React from "react";

const UserInfo = (props) => {
  const { firstName, lastName, email, password, confirmPassword } = props;

  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
};

export default UserInfo;
