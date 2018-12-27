import React, { Component } from "react";

//anoher option instead of using a class
//stateless functional component
/*const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary m-1">
              {props.totalCounters}
            </span>
          </a>
        </nav>
        );
}*/
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-1">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
