import React, { Component } from 'react';

export class Child extends Component {
  render() {
    console.log('child render');
    return <h2 style={this.props.style}>Child</h2>;
  }
}

export default Child;
