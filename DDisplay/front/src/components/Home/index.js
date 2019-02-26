import React, { Component } from 'react';
import HeroBanner from './HeroBanner'
import CallOutHome from './CallOutHome';
import VideoSection from './VideoSection';
import PortfolioSection from './PortfolioSection';

class Home extends Component {
  render() {
    return (
      <div>
        <HeroBanner />
        <CallOutHome />
        <VideoSection />
        <PortfolioSection />
      </div>
    )
  }
}
export default Home;