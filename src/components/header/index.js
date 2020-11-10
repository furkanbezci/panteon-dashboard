import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <nav className="user-menu" >
        <div className="logo" >
          <h1>
            <a href="#">Dashboard</a>
          </h1>
        </div>
      </nav>
    );
  }
}
