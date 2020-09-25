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
    </div>
  );
}

export default Home;
