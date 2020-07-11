import React from "react";

const Navbar = (props) => {
  const {name} = props;
  return (
      <a className="navbar-brand" href="#!">
      Hi  {name}
      </a>
  );
};

export default Navbar;
