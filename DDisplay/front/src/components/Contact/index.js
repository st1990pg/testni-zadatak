import React, { Component } from 'react'
import PageTitle from '../PageTitle';
import GooMaps from './GooMaps';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <PageTitle title="GOT A QUESTION OR INQUIRY?" />
        <div className="map-google"><GooMaps /></div>
        <Container>
          <Row>
            <Col md={7} className="contact-form-text">
              <h3>CONTAC FORM</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>

              <ContactForm />
            </Col>
            <Col md={{span: 4, offset: 1}} className="contact-info-text"><div className="wrapper"></div>
              <h3>CONTACT INFO</h3>
              <div className="wrapper">
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
              </div>
              <div className="wrapper">
                <p><strong>email:</strong> <span className="green"><a href="mailto:info@dispaly.com">info@dispaly.com</a></span></p>
                <p><strong>phone:</strong> 1.306.222.4545</p>
              </div>
              <div className="wrapper">
                <p>222 2nd Ave South</p>
                <p>Saskabush, SK S7M 1T</p>
              </div>
              <h3>STORE HOURS</h3>
              <table>
              <tr>
                <td>Monday - Thursday  </td>
                <td>8 am - 5 pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8 am - 6 pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>9 am - 5 pm</td>
              </tr>
              <tr>
                <td>Sunday & Holidays</td>
                <td>Closed</td>
              </tr>
              </table>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Contact;