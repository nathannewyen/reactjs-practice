import React from "react";

const UserInfo = (props) => {
  const { firstName, lastName } = props;

  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default UserInfo;
