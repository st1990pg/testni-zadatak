import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './TopHeader';
import MainMenu from './MainMenu';



 class Header extends Component {
  render() {
    return (
        <div>
           <header>
              <Container>
                  <TopHeader />
                  <hr className="no-mar"></hr>
                  <MainMenu />
              </Container>
            </header>
        </div>
    )
  }
}

export default Header;
