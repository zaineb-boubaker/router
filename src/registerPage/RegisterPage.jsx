import React from "react";
import Auth from "../auth/Auth";
import { Link, NavLink } from "react-router-dom";

function RegisterPage() {
    return (
      <div id="registerpage">
        <div id="navv">
          <div id="logo">
            <NavLink to="/">
              {" "}
              <img src="./images/hplogo2.png" alt="" />
            </NavLink>
            {/* <h1>NETFILM</h1> */}
          </div>
          <div id="auth">
            <Auth />
          </div>
        </div>
        <div id="registercontainer">
          <h1>REGISTER</h1>
                <form>
                    <div className="log">
              <label for="password">Name</label>
              <input type="text" id="name" name="name" />
            </div>{" "}
            <div className="log">
              <label for="password">Last Name</label>
              <input type="text" id="lastname" name="lastname" />
            </div>
            <div className="log">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="log">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>{" "}
          
            <button type="button">Register</button>
          </form>
        </div>
        <Link to="/movies">
          {" "}
          <img id="back2" src="/images/back (3).png" alt="" />
        </Link>
      </div>
    );
}

export default RegisterPage;
