import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Banner from './layout/Banner';
import './App.css';
class App extends Component {

  render() {
    return (
        <div>
          <Router>
              <Navbar />
              <Banner />
          </Router>
        </div>
    );
  }
}

export default App;
