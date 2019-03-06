import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';
import { loadReCaptcha } from 'react-recaptcha-google'

class App extends Component {

  componentDidMount(){
    loadReCaptcha();
  }

  render() {
    return (
      <Router>
        <div>
            <Header />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
              </Switch>
            <Footer />
        </div>
      </Router>
    )
  }
}

export default App;