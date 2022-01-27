import { TARGET_ID } from "../actions/index";
import { initState } from "../store/index";




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

// const demoApp = combineReducers(fileState

//   // todos,
//   // visibilityFilter
// )


export default fileState;