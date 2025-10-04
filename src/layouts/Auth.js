import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import { useHistory } from "react-router-dom";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import ForgetPassword from "views/auth/ForgetPassword";

export default function Auth() {
const history = useHistory();

  const token = localStorage.getItem("token");
  if (token) {
    if (localStorage.getItem("role") === "admin") {
      history.push("/admin/tables");
    } else {
      history.push("/landing");
    }
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-lightBlue-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bg.gif").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route
              path="/auth/ForgetPassword"
              exact
              component={ForgetPassword}
            />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
