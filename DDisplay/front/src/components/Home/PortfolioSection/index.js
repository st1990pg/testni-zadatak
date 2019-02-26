import React, { Component } from 'react'
import SliderPort from './SliderPort';

class PortfolioSection extends Component {
  render() {
    return (
      <div className="portfolio-section">
        <h3>Get To Know Us a Little Better!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>
            <SliderPort />
      </div>
    )
  }
}
export default PortfolioSection;