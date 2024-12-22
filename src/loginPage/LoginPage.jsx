import React from "react";
import Auth from "../auth/Auth";
import "./style.css";
import { Link, NavLink } from "react-router-dom";


function LoginPage() {
    return (
      <div id="loginpage">
        <div id="navv">
          <div id="logo">
            <NavLink to="/">
              <img src="./images/hplogo2.png" alt="" />
            </NavLink>
            {/* <h1>NETFILM</h1> */}
          </div>

          <div id="auth">
            <Auth />
          </div>
        </div>
        <div id="logincontainer">
          <h1>LOGIN</h1>
          <form>
            <div className="log">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="log">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="button">Login</button>
          </form>
        </div>
        <Link to="/movies">
          {" "}
                <img id="back2" src="/images/back (3).png" alt="" />
               
        </Link>
      </div>
    );
}

export default LoginPage;
