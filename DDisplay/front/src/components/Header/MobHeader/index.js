import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../TopHeader/Logo';
import { NavLink  } from "react-router-dom";

const navPage = [
    {"id": 0, "page": "HOME", "link":"/"},
    {"id": 1, "page": "ABOUT", "link":"/about"},
    {"id": 2, "page": "WORK", "link":"/work"},
    {"id": 3, "page": "CONTACT", "link":"/contact"}
  ]

class MobHeader extends Component {
    constructor(){
        super();
        this.state={
            top: false
        }
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton(){
        this.setState({
            top: !this.state.top
        })
    }

    render() {
        let top = this.state.top ? "50px" : "-550px";
        const mainMenu = navPage.map(page => <li key={page.id}><NavLink exact className="link" activeStyle={{color: '#2ecc71'}} to={page.link}>{page.page}</NavLink></li>)
        return (
          <div>
              <Container className="mobile-header">
                    <Row className="top-mob">
                        <Col xs={6}><Logo /></Col>
                        <Col xs={6}><button className="nav-mobile-but" onClick={this.toggleButton}><i className="fa fa-bars"></i></button></Col>
                    </Row>
                    <ul className="main-menu" style={{top:top}}>
                    
                        {mainMenu}
                    </ul>
            </Container>
          </div>
        )
      }
}
export default MobHeader;