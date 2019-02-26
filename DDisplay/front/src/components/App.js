import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
            <Header />
            
            
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              
            
            <Footer />
        </div>
      </Router>
    )
  }
}

export default App;