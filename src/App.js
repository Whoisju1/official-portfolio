import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import Footer from './components/Footer';


import "./style/reset.css";
import "./style/main_container.css";
import "./style/header.css";
import "./style/main_page.css";
import "./style/landing_page.css";
import "./style/about.css";
import "./style/portfolio.css";
import "./style/contact.css";
import "./style/footer.css";
import "./style/index.css";
import "./style/contact_form.css";
import './style/contact_form.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <LandingPage />
        <MainPage />
        <a name="contact"><Footer /></a> 
      </div>
    );
  }
}

export default App;
