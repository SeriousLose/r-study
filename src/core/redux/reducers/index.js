import { combineReducers } from 'redux';
import { INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS, SELECT_SUBREDDIT, TARGET_ID } from "../actions/index";


export const initState = {
  cart: [],
  value: 'redux 的数据',
  list: ['1', '2', '3']
}

const fileState = (state = initState, action) => {
  switch (action.type) {
    case TARGET_ID:
      return Object.assign({}, state, {
        id: action.id
      })
    default:
      return state
  }
}


function selectedsubreddit (state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}




const rootReducer = combineReducers(
  {
    fileState,
    selectedsubreddit,
    postsBySubreddit
  }
)

export default rootReducer;