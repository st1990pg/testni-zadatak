import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PopUpVideo from './PopUpVideo';
import VideoImg from '../../../img/video.png';

class VideoSection extends Component {

  constructor(){
    super();
    this.state ={
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
  }
  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="video-section">
        <Container>
            <Row>
                <Col lg={5}  className="text-align-center"><button className="video-button" onClick={this.togglePopup}><img src={VideoImg} alt="video"/></button></Col>
                <Col lg={7}>
                  <h3>Get To Know Us a Little Better!</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
<br /><br />
Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
                  </p>
                </Col>
                {this.state.showPopup ? 
                  <PopUpVideo
                    closePopup={this.togglePopup}
                  />
                  : null
                }
            </Row>
        </Container>
      </div>
    )
  }
}
export default VideoSection;