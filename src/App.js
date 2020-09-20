import React, {Component} from 'react';
import './App.css';
import Person from './components/Person.js';
import About from './components/About.js';
import Playground from './components/Playground.js';
import Header from './layout/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import alannah from './ala.jpeg';
import hayley from './hay.jpg';
import brooke from './brooke.jpg';


//function App() {

class App extends Component {

  state = {
    persons: [
      {name: 'Michael Jordan', age: 58,   hobbies: 'Basketball',   index: 0 },
      {name: 'Tiger Woods', age: 45,      hobbies: 'Golf',   index: 1 },
      {name: 'Mohammed Ali', age: 83,     hobbies: 'Boxing',   index: 2}
    ]
  }

  nameChangedHandler = (event) =>  {
    this.setState(
      {
        persons: [
          {name: event.target.value, age: 58, index: 0 },
          {name: event.target.value, age: 63, index: 1 },
          {name: event.target.value, age: 33, index: 2}
        ]
      }
    )
  }

  switchNameHandler = () => {
    // DON'T DO THIS - > this.state.persons[0].name = 'john';
    // INSTEAD USE the setState( ) method
    this.setState(
       {
         persons: [
          {name: 'Alannah', age: 11, hobbies: 'Swimming',   index: 3 },
          {name: 'Hayley', age: 8,   hobbies: 'Gymnastics', index: 4  },
          {name: 'Brooke', age: 5,   hobbies: 'Dancing',   index: 5  }
        ]
       }
    )
  }

  render() {
    return (

      <Router>
        <div className="App">
          <div className="container">
          <Header />

            <h1> Famous People </h1>
            <button onClick={this.switchNameHandler}>Switch Names</button>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              hobbies={this.state.persons[0].hobbies}
              index={this.state.persons[0].index}
              changed={this.nameChangedHandler} >
            </Person>

            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              hobbies={this.state.persons[1].hobbies}
              index={this.state.persons[1].index}
              changed={this.nameChangedHandler} >
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              hobbies={this.state.persons[2].hobbies}
              index={this.state.persons[2].index}
              changed={this.nameChangedHandler} >
            </Person>

            <Route path="/about" component={About} />

            <Route path="/play" component={Playground} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
