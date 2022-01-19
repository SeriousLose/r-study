import React, { useEffect, useState } from 'react';
import { getList } from '../../core/services/httpService';

function DiscussList(props) {
  const [list, setList] = useState([]);
  const { targetId } = props;
  function changeText(item) {
    console.log(item)
    // return setText("修改后的文本");
  }

  useEffect(() => {
    // setList
    const fetchData = async () => {
      const result = await getList(targetId);
      console.log(result);
      setList(result.list);
    };
    fetchData();
  }, [targetId]);

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={() => changeText(item) }>
            {item.cont}
          </div>
        );
      })}
      <p>评论列表</p>
    </div>
  );
}

export default DiscussList;
