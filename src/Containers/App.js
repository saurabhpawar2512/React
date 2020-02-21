import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";
// import Radium, { StyleRoot } from "radium";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Saurabh", age: 25 },
      { id: 2, name: "Saurabh1", age: 26 },
      { id: 3, name: "Saurabh2", age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const value = this.state.showPersons;
    this.setState({ showPersons: !value });
  };

  loginHandler = () => {
    const value = this.authenticated;
    this.setState({ authenticated: !value });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <Auxillary>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit === true ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.toggleHandler}
            alt={this.state.showPersons}
          />
        ) : null}
        {persons}
      </Auxillary>
    );
  }
}

export default withClass(App, classes.App);
