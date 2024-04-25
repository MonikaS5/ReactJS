import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    const {myName}= this.props;
    const {myNumber}= this.props;
    const {any11}= this.props;
    const {boolean}= this.props;
    const {arr}= this.props;
    return (
      <div>Hello
      <p>My name is : {myName}</p>
      <p>My age is : {myNumber}</p>
      <p>Enter any data type here : {any11}</p>
      <p>1 is greater than 0 : {boolean}</p>
      <p>Array of Numbers : {arr}</p>
      </div>
    )
  }
}
Hello.propTypes = {
  myName: PropTypes.string.isRequired,
  myNumber: PropTypes.number.isRequired,
  any11: PropTypes.any.isRequired,
  boolean: PropTypes.bool.isRequired,
  arr: PropTypes.array.isRequired
};

export default Hello