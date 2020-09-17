import React from "react";
import logo from "../../Assets/logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>Get Started with React Pack</p>
      </header>
      <div className="container">
        <div className="container-inner">
          <p>Libraries to add: </p>
          <p>Styling?</p>
          <li>Styled Components</li>
          <li>Sass</li>
          <p>TypeScript?</p>
          <li>Getting started with typescript</li>
        </div>
      </div>
    </div>
  );
}

export default Home;
