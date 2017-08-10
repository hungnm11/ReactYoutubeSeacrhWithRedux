import axios from 'axios';

const API_KEY = 'AIzaSyAAFuih1jjBDqIM9rXj8V30brfavcXH5zM';
const ROOT_URL = 'https://content.googleapis.com/youtube/v3/search';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const GET_KEYWORD = 'GET_KEYWORD';

export function searchKeyword(keyword) {
  return {
    type: GET_KEYWORD,
    payload: keyword
  }
}

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export function getDataFailure(err) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: err
  }
}

export function fetchData(q) {
  const url = `${ROOT_URL}/?q=${q}&maxResults=25&part=snippet&key=${API_KEY}`;
  console.log('URL', url);
  return (dispatch) => {
    dispatch(getData())
    axios.get(url)
    .then((response) => {
      dispatch(getDataSuccess(response));
    })
    .catch((err) => {
      dispatch(getDataFailure(err));
    })
  }
}