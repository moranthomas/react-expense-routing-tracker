import React, {Component} from 'react';
import './App.css';
import Person from './components/Person.js';
import About from './components/About.js';
import Playground from './components/Playground.js';
import Header from './layout/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components'

//function App() {

class App extends Component {

  state = {
    persons: [
      {id: 1000, name: 'Michael Jordan', age: 58,   hobbies: 'Basketball',   index: 0 },
      {id: 2000, name: 'Tiger Woods', age: 45,      hobbies: 'Golf',   index: 1 },
      {id: 3000, name: 'Mohammed Ali', age: 83,     hobbies: 'Boxing',   index: 2}
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    // DON'T DO THIS - > this.state.persons[0].name = 'john'; // INSTEAD always USE the setState( ) method
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

  // This takes an event as an argument since it is being called from the input field
  nameChangedHandler = (event, id) => {

    // need to find the person in the array that we have clicked on using the index
    const personIndex = this.state.persons.findIndex(p => {
      // return true if this is the person that clicked
      return p.id === id
    });

    // it's good practice to not mutate the state directly (a person is a js object) so the better approach
    // is to create a new javascript object and use SPREAD to copy the original object into a new object.
    const person = {
      ...this.state.persons[personIndex]
    }

    // can modify now as person is a new object
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    // now just modify the person at that index
    newPersons[personIndex] = person;

    this.setState(
      { persons: newPersons }
    )
  }

  deletePersonHandler = (personIndex) => {
    // fetch all the persons by creating a copy using slice();
    const persons = this.state.persons.slice();  // Alternatively you can use spread operator [...this.state.persons]
    // Arrays and objects are references - so you can update a const persons as it is just a reference
    persons.splice(personIndex, 1);     // remove one element, starting at personIndex
    this.setState({persons: persons})   // set state to the updated persons
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow } );
  }

  render() {

    // we can write whatever code we want here before the return() block since this is not JSX !

    const btnStyle = {
      display: 'inline-block',
      border: 'none',
      background: '#555',
      color: '#fff',
      padding: '7px 20px',
      cursor: 'pointer',
      margin: '20px'
    }

    const StyledButton = styled.button`
      display: inline-block;
      border: none;
      background-color: ${ props => props.alt ? 'red' : 'green' };
      color: #fff;
      padding: 7px 20px;
      cursor: pointer;
      margin: 20px;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color:black;
      }

    ` ;





    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={ () => this.deletePersonHandler(index) }
                name={person.name}
                age={person.age}
                hobbies={person.hobbies}
                index={person.index}
                changed={ (event) => this.nameChangedHandler(event, person.id) }/>
            })
          }
        </div>
      );

      btnStyle.background = 'red';

    }

    return (

      <Router>
        <div className="App">
          <div className="container">
          <Header />

            <h1> Famous People </h1>

            <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}> Show/Hide </StyledButton>

            <button style={btnStyle} onClick={this.switchNameHandler}>Switch Names</button>

            {persons}


            <Route path="/about" component={About} />

            <Route path="/play" component={Playground} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
