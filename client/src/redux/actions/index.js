import {
  GET_ALL_VIDEOGAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
} from "./../constants";
import axios from "axios";
// require('dotenv').config();
// const  {GET_ALL_GAMES } = process.env
// console.log(GET_ALL_GAMES)

export const getAllGames = () => (dispatch) => {
  console.log('SOY EL DISPATCH', dispatch)
  dispatch({
    type: GET_ALL_VIDEOGAMES,
  });
  return axios
    .get('http://localhost:3001/videogames')
    .then((res) => {
      dispatch({
        type: GET_GAMES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GAMES_ERROR,
        payload: err.response,
      });
    });
};
