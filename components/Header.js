import React from "react";

const Header = () => {
  const session = false;
  return <div>{session ? <div>Header</div> : ""}</div>;
};

export default Header;
