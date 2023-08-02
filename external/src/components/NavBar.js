import React from "react"; 
import logo from "../assets/images/tribunal_logo.png"; // use in Navbar component file

function NavBar() {
    return (
      <header>
        <a href="https://tribunal.uc.edu/">
          <img src={logo} alt="CEAS Tribunal Logo" />
        </a>
      </header>
    );
  };
  export default NavBar;