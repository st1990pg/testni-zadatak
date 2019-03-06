import React, { Component } from 'react'
import PageTitle from '../PageTitle';
import { Container, Row, Col } from 'react-bootstrap';
import imgAbout from "../../img/img-about.jpg";
import ServiceTab from './Service/ServiceTab';



 class About extends Component {
  render() {
    return (
      <div className="about-us">
        <PageTitle title="ABOUT MY BUSINESS" />
        <Container>
          
            <div className="about">
            <Row>
              <Col lg={5}><img className="img-about" src={imgAbout} alt="imgAbout" /></Col>
              <Col lg={7}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
                 vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
                  quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
                   id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
    <br /> <br />
    Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
            </Row>  
            </div>
            <div className="mission">
            <Row>
              <Col lg={6}>
              <h4>Mission Statement</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
                 vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
                  quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
                   id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
              </Col>
              <Col lg={6}>
              <h4>Fun FActs</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
                 vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
                  quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
                   id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
              </Col>
              </Row>
            </div>
            <h3>SERVICE</h3>
        </Container>
        <div className="service">
          <ServiceTab />
        </div>

      </div>
    )
  }
}
export default About;