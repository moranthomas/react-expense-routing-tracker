import React, { Component } from 'react'


export class Playground extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: ["ONE", 'TWO', 'THREE']
    };
  }

  render() {
      return (
      <div>
          <h1> Playground </h1>
          <Options
            options={this.state.options}/>
          <AddOption />
          <VisibilityToggle name="Darth Vader"/>
        </div>

      )
  }
}

export default Playground

class Options extends Component {

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.state = {
      buttonText: "Show Details"
    };
  }

  handleRemoveAll() {
    console.log(this.props.state.options);
    this.setState( () => {
      return {
        options: []
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}> Remove All </button>
        <ol>
          {
            this.props.options.map((option) => <li key={option}>{option}</li>)
          }
        </ol>
      </div>
    )
  }
}

class AddOption extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Add Option </button>
        </form>
      </div>
    )
  }

}

class VisibilityToggle extends Component {

  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  toggleVisibility () {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle </h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'ShowDetails'}
        </button>
        { this.state.visibility && (
          <div>
            <p>This shows up on visible ! {this.props.name}</p>
          </div>
        )}
      </div>
    );
  }
}
