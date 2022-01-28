import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';


const store = createStore(
  reducer, applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    // loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)


export default store;
