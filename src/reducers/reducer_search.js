import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/index';

const initialState = {
  data: [],
  isFetching: false,
  error: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: false
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: [action.payload.data][0],
        isFetching: true
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}