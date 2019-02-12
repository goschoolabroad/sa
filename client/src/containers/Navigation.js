import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1
    }
  }

  activateItem(index) {
    this.setState({
      activeItem: index
    });
  }


  render() {
    let paths = ["/#h-whyabroad", "/#h-howitworks", "/#h-pricing", "/schools", "/blog"];
    let pathNames = ["Why Study Abroad", "How it Works", "Pricing", "Schools", "Blog"];
    let menu = paths.map((path, i) => {
      return (
        <li key={i} className={this.state.activeItem === i ? "nav-item active" : "nav-item"} onClick={this.activateItem.bind(this,i)}>
          <NavLink to={path} className="nav-link" title={`Go to ${pathNames[i]} section`}>{pathNames[i]}</NavLink>
        </li>
      );
    });

    return (
      <header className="fixed-top bg-white" id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white" id="nav-bar">
            <a className="navbar-brand" href="/">
              <img src="https://i.pinimg.com/originals/24/66/6b/24666b8635ff65e331a26928d55f9f43.png" alt="School Abroad Logo" id="header-img" />
            </a>
            <button className="navbar-toggler text-white px-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav navbar-right">{menu}</ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation