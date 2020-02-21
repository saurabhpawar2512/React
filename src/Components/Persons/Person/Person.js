import React, { Component } from "react";
// import classes from "./Person.module.css";
import Auxillary from "../../../hoc/Auxillary";
import withClass from "../../../hoc/withClass";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: "450px";
//   }
// `;
class Person extends Component {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // };
  // const rnd = Math.random();

  // if (rnd < 0.7) {
  //   throw new Error("Something went wrong");
  // }
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      // <div className="Person" style={style}>
      <Auxillary>
        <p onClick={this.props.click}>
          I 'm a {this.props.name} and I am {this.props.age} of old.
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
      </Auxillary>
      // </div>
    );
  }
}

export default withClass(Person);
