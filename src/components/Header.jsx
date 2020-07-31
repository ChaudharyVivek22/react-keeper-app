import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";

function Header() {
  return (
    <header>
      <h1>
        <MenuBookIcon
          style={{ color: "white", fontSize: "45px", padding: "15px 0 0 0" }}
        />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
