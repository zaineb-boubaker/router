import React from "react";
import { NavLink } from "react-router-dom";

function Auth() {
  return (
    <div id="login">
      <NavLink to="/register">
        <button className="butlog">Register</button>
      </NavLink>
      <NavLink to="/login">
        <button className="butlog">LogIn</button>
      </NavLink>
    </div>
  );
}

export default Auth;
