import React, { Component } from 'react';
import { TARGET_ID } from '../../core/redux/actions/index';
import store from '../../core/redux/store/index';
import { getArticle } from '../../core/services/httpService';
import DiscussList from '../DiscussList/DiscussList';


export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { targetId: 71061, title: '', value: store.getState() };
    console.log(this.state.value,'redux数据');
    // store.subscribe(this.changeId);
  }

  componentDidMount() {
    let data = this.props.location.state;
    console.log(data);
    let { articleId } = data;
    this.setState({ targetId: articleId }, () => {
      console.log(this.state);
      getArticle(this.state.targetId).then((obj) => {
        this.setState({ title: obj.title });
      });
    });
  }

  changeId(){
    const action = {
      type:TARGET_ID,
      id: 71061
    }
    store.dispatch(action);
    console.log(store.getState())
    this.setState({value:store.getState()});
    //  console.log('更新id')
  }

  render() {
    return (
      <div>
        <div>{this.state.value.value}</div>
        <div>{this.state.value.id}</div>
        <button onClick={() => this.changeId()}>更新id</button>
        <div>文章详情页</div>

        <div>{this.state.title}</div>
        <DiscussList targetId={this.state.targetId} />
      </div>
    );
  }
}

export default Article;
