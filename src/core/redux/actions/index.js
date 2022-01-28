/**
 * @description: 获取文章id
 * @param {*} text
 * @return {*}
 */
export const TARGET_ID = 'TARGET_ID'

export const getId = (id) => ({
  type: TARGET_ID,
  id
})


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidatesubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}



export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(subreddit, json) {
  console.log(json);
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://it.xxynet.com/shopguide/api/auth/logonweb?password=123456&loginName=cszuser&version=1`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。
  return (dispatch, getState) => {
    console.log(subreddit)
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}