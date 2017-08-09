import { GET_KEYWORD } from '../actions/index';

const initialState = {
  keyword: [],
  isLoading: false,
  error: false
}

export default function(state = {}, action) {
  switch(action.type) {
    case GET_KEYWORD:
      return {
        keyword: action.payload
      }
    default:
      return state;
  }
}