import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
}

export const actionTypes = {
  SUBSCRIBE: 'SUBSCRIBE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SUBSCRIBE:
      return Object.assign({}, state, {
        list: [action.payload]
      })
    default:
      return state
  }
}

// ACTIONS
export const abc = (email) => dispatch => {
  console.log(email);
  return dispatch({ type: actionTypes.SUBSCRIBE, payload: {email: email} })
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}