import axios from 'axios';

export const GET_DATA = 'GET_DATA'

export const fetchData = () => {
  const promise = axios.get('https://localhost:5000/movies');
  return({
    type: GET_DATA,
    payload: promise,
  });
}
