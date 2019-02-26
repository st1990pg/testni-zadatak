import React, { Component } from 'react';
import HeroBack from '../../../img/slider-background.png';
import iPad from '../../../img/iPad.png';
import iPhone from '../../../img/iPhone.png';
import macBook from '../../../img/macbook-pro.png';

export default class HeroBanner extends Component {
  render() {
      const style ={
        backgroundImage: `url(${HeroBack})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    return (
        <div className="hero-baner-home" style={style}>
            <div className="wrapper">
                <div className="ipad"><img src={iPad} alt="iPad" /></div>
                <div className="iphone"><img src={iPhone} alt="iPhone" /></div>
                <div className="macbook"><img src={macBook} alt="macBook" /></div>
            </div>
        </div>
    )
  }
}
