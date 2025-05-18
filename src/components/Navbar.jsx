import React from "react";

function Navbar() {
  return (
    <>
      <ul>
        <div>
          <li>
            <img src="/cliciclogo.jpeg" alt="navbarLogo" />
          </li>
        </div>
        <div>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Uptudes</li>
          <li>More Info</li>
          <li>Contact</li>
        </div>
        <div>
          <button>Book Appointment</button>
          <button>Login</button>
          <button>Search</button>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
