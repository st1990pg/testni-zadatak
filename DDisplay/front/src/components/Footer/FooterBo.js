import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink  } from "react-router-dom";

class FooterBo extends Component {
  render() {
    return (
      <div className="footer-bottom">
      <Container>
            <Row>
                <Col>
                    <div className="text-p">
                        <p>Copyright 2013 Display. All Rights Reserved.</p>
                    </div>
                </Col>
                <Col>
                    <div className="footer-nav">
                        <p><NavLink exact className="link" activeStyle={{color: '#2ecc71'}} to="/">HOME</NavLink> / <NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/about">ABOUT</NavLink> / <NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/work">WORK</NavLink> / <NavLink className="link" activeStyle={{color: '#2ecc71'}} to="/contact">CONTACT</NavLink></p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
export default FooterBo;
