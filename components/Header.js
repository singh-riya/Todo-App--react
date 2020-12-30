import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className='nav-bar' bg='dark'>
        <Navbar.Brand href='#home' className='nav-name'>
          <p> Todo Application</p>
        </Navbar.Brand>
      </Navbar>
      <h1>Hey, What's Your Today's Plan</h1>
    </div>
  );
}

export default Header;
