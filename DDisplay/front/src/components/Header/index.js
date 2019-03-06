import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './TopHeader';
import MainMenu from './MainMenu';
import MobHeader from './MobHeader';



 class Header extends Component {
  render() {
    
    return (
        <div>
           <header>
              <Container>

                {
                  screen.width > 600
                  ? <MainMenu />
                  :<MobHeader />
                }

                  
              </Container>
            </header>
        </div>
    )
  }
}

export default Header;
{/* 
                  <MainMenu /> */}