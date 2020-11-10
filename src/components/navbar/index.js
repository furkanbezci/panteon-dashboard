import React, { Component } from "react";
import "./styles.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
          <li>
            <a href="index.html">
              <img
                src={"/panteon-dashboard/images/dashboardImages/logo.png"}
                alt="logo"
                className="logo-style"
              />
            </a>
          </li>
          <li className="dashboard-menu">
            <a href="index.html">
              <div className="dashboard-icon-container">
                <img
                  src={"/panteon-dashboard/images/dashboardImages/dashboardMenuIcon.png"}
                  alt="dashboard"
                  className="menuIcon"
                />
                <i
                  className="fa fa-angle-right nav_icon"
                  style={{ paddingLeft: 20 }}
                ></i>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
