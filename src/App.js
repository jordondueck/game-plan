import React, { Fragment } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <Fragment>
      <header>
        <h1 className="title">Developer Dashboard</h1>
        <nav></nav>
      </header>
      <section>
        <SignIn />
      </section>
      <footer></footer>
    </Fragment>
  );
};

export default App;
