import React from "react";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title">Developer Dashboard</h1>
        <nav></nav>
      </header>
      <section>
        <SignIn />
      </section>
      <footer></footer>
    </div>
  );
};

export default App;
