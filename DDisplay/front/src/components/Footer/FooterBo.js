import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink  } from "react-router-dom";

const navPage = [
  {"id": 0, "page": "HOME", "link":"/"},
  {"id": 1, "page": "ABOUT", "link":"/about"},
  {"id": 2, "page": "WORK", "link":"/work"},
  {"id": 3, "page": "CONTACT", "link":"/contact"}
]

class FooterBo extends Component {
  constructor(){
        super();
        this.returnToTop = this.returnToTop.bind(this);
    }

    returnToTop(){
        document.documentElement.scrollTop = 0
    }
  render() {
    const numLink = navPage.length;
    const footerNav = navPage.map(page =><div className="float-left" key={page.id}> <NavLink exact className="link" onClick={this.returnToTop} activeStyle={{color: '#2ecc71'}} to={page.link}> <p> {page.page} <span> / </span></p></NavLink></div>);
  
    return (
      <div className="footer-bottom">
      <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <div className="text-p">
                        <p>Copyright 2013 Display. All Rights Reserved.</p>
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <div className="footer-nav float-right">
                        
                          {footerNav}
                        
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
export default FooterBo;
