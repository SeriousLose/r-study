import React, { Component } from 'react';

export class NumberList extends Component {
  numbers = [1, 2, 3, 4, 5];
  listItems = this.numbers.map((number) => <li key={number.toString()}>{number}</li>);
  render() {
    return (
      <div>
        <ul>{this.listItems}</ul>
      </div>
    );
  }
}

export default NumberList;
