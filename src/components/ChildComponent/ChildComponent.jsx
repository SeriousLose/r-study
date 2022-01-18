import React, { Component } from 'react';

export class ChildComponent extends Component {

  state = {
    text: '子组件的文本',
  };

  changeText = () => {
    // changeText 中，调用了父组件传入的 changeFatherText 方法
    this.props.changeFatherText(this.state.text);
  };
  render() {
    return (
      <div className="child">
        <p>{`子组件所接收到的来自父组件的文本内容是：[${this.props.fatherText}]`}</p>
        <button onClick={this.changeText}>点击更新父组件的文本</button>
      </div>
    );
  }
}

export default ChildComponent;
