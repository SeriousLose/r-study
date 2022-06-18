import React, { Component } from 'react';

export class ChildLife extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);

    if (this.props.style.color !== nextProps.style.color) {
      // 比较新旧props，决定是否重新渲染组件
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log('ChildLife render');
    return (
      <div>
        <button onClick={() => this.setState((state) => ({ count: state.count + 1 }))}>Count: {this.state.count}</button>
        <h2 style={this.props.style}>ChildLife</h2>
      </div>
    );
  }
}

export default ChildLife;
