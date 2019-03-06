import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGr from '../Elements/ButtonGr';

class CallOut extends Component {
  render() {
    return (
      <div className="call-out-sec"> 
            <Container>
                <Row>
                    <Col xs={12} sm={6}><h4 className="text-h4">ARE YOU READY TO BE BELOWN AWAY? </h4></Col>
                    <Col xs={12} sm={6}>
                        <ButtonGr title="CLICK HERE TO FIND OUT" align="right"/>
                    </Col>
                </Row>
            </Container>
      </div>
    )
  }
}
export default CallOut;