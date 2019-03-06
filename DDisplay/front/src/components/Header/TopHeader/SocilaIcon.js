import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocilaIcon extends Component {
  render() {
    return (
      <div className="social-icon" style={{textAlign: "right"}}>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
        <a href="https://www.google.com/"><i className="fab fa-google"></i></a>
        <a href="https://dribbble.com/"><i className="fab fa-dribbble"></i></a>
        <a href="https://sh.wikipedia.org/wiki/Wi-Fi"><i className="fas fa-wifi"></i></a>
      </div>
    )
  }
}

export default SocilaIcon;