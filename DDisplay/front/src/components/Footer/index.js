import React, { Component } from 'react'
import CallOut from './CallOut';
import FooterBo from './FooterBo';
import linkImg from '../../img/link.png';


class Footer extends Component {
  render() {
    return (
    
      <div>
          <footer>
            <CallOut />
            <FooterBo />
          </footer>
      </div>
    )
  }
}
export default Footer;