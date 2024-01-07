import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {

    return (

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{fontStyle:'italic'}}>
          <a className="navbar-brand" href="#">
            About Me
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
