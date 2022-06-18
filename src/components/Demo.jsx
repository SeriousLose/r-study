import React, { Component } from 'react';
import Child from './Child';

export class Demo extends Component {
  onClick = () => {
    this.setState({});
  };
  render() {
    return (
      <>
        <button onClick={this.onClick}>test</button>
        <Child style={{ color: 'red' }} />
      </>
    );
  }
}
export default Demo;
