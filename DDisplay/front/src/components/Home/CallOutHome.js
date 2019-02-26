import React, { Component } from 'react'
import ButtonGr from '../Elements/ButtonGr';
import { Container } from 'react-bootstrap';


class CallOutHome extends Component {
  render() {
    return (
      <Container>
        <div className="call-out-home">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus,
                vel congue mauris. Fusce velitaria justo, faucibus eu.</h5>
                <ButtonGr title="BROWSE PORTFOLIO" />
        </div>
      </Container>
    )
  }
}
export default CallOutHome;