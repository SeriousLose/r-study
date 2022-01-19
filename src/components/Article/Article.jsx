import React, { Component } from 'react';
import { getArticle } from '../../core/services/httpService';

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { targetId: 71061, title: '' };
  }

  componentDidMount() {
    getArticle(this.state.targetId).then((obj) => {
      this.setState({ title: obj.title });
    });
  }
  render() {
    return <div>{this.state.title}</div>;
  }
}

export default Article;
