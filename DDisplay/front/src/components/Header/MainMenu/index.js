import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";
import TopHeader from "../TopHeader";

const navPage = [
  {"id": 0, "page": "HOME", "link":"/"},
  {"id": 1, "page": "ABOUT", "link":"/about"},
  {"id": 2, "page": "WORK", "link":"/work"},
  {"id": 3, "page": "CONTACT", "link":"/contact"}
]

class MainMenu extends Component {
  render() {
    const mainMenu = navPage.map(page => <li key={page.id}><NavLink exact className="link" activeStyle={{color: '#2ecc71'}} to={page.link}>{page.page}</NavLink></li>)
    return (
      <div>
        <TopHeader />
                  <hr className="no-mar"></hr>
      <div>
        
        <ul className="main-menu">
          
            {mainMenu}
        </ul>
      </div>
      </div>
    )
  }
}
export default MainMenu;