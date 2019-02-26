import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";

class MainMenu extends Component {
  render() {
    return (
      <div>
        <ul className="main-menu">
            <li><NavLink exact className="link" activeStyle={{color: '#2ecc71'}} to="/">HOME</NavLink></li>
            <li><NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/about">ABOUT</NavLink></li>
            <li><NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/work">WORK</NavLink></li>
            <li><NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>
    )
  }
}
export default MainMenu;