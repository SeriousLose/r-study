import React, { Component } from 'react';
import { getArticle } from '../../core/services/httpService';
import DiscussList from '../DiscussList/DiscussList';



export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { targetId: 71061, title: '' };
  }

  componentDidMount() {
    let data = this.props.location.state;
    console.log(data);
    let { articleId }= data;
    this.setState({ targetId: articleId },()=>{
      console.log( this.state )
      getArticle(this.state.targetId).then((obj) => {
        this.setState({ title: obj.title });
      });
    });
  }

  render() {
    return (
      <div>
        <div>文章详情页</div>
        <div>{this.state.title}</div>
        <DiscussList targetId={this.state.targetId} />
      </div>
    );
  }
}

export default Article;
