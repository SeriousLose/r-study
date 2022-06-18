import React, { Component } from 'react';
import Child from './Child';
// import ChildPure from './ChildPure';
import ChildLife from './ChildLife';

export class Demo extends Component {
  childStyle = { color: 'pink' };
  onClick = () => {
    this.setState({});
  };
  render() {
    return (
      <>
        <button onClick={this.onClick}>test</button>
        {/* <Child style={{ color: 'red' }} /> */}
        {/* <ChildPure style={{ color: 'yellow' }} /> */}
        <Child style={this.childStyle} />
        {/* <ChildPure style={this.childStyle} /> */}
        <ChildLife style={this.childStyle} />
      </>
    );
  }
}
export default Demo;
