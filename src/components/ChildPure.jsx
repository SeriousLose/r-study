import React from 'react';

export class ChildPure extends React.PureComponent {
  render() {
    console.log('child render PureComponent');
    return <h2 style={this.props.style}>PureComponent</h2>;
  }
}

export default ChildPure;
