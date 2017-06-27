import { INCREMENT, DECREMENT } from '../actions'

const initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + action.payload })
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - action.payload })
    default:
      return state
  }
}
