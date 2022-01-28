import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchPostsIfNeeded, TARGET_ID } from '../../core/redux/actions/index';
import store from '../../core/redux/store/index';
import { getArticleList } from '../../core/services/httpService';


function ArticleList() {
  const [list, setList] = useState([]);
  let history = useHistory();
  function changeText(item) {
    console.log(item,'文章数据');
    const action = {
      type:TARGET_ID,
      id:item.articleId
    }
    console.log(store)
    store.dispatch(action);
    console.log(store.getState().fileState,2222)

    let path = {
      pathname: '/detail',
      state: item,
    };
    // history.push(`/${item.articleId}`);
    history.push(path);

    // return setText("修改后的文本");
  }

  useEffect(() => {

    store.dispatch(fetchPostsIfNeeded('reactjs')).then(() => {
      console.log(store.getState(),1111)
    })
    // setList
    const fetchData = async () => {
      const result = await getArticleList();
      console.log(result, 11);
      setList(result.value);
    };
    fetchData();




  }, []);

  return (
    <div>
      <h1>文章列表</h1>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={() => changeText(item)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default ArticleList;
