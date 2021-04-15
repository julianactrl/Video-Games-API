import axios from "axios";
import 'dotenv'
const { GET_ALL_GAMES } = process.env.REACT_APP;

const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
const GET_GAMES_ERROR = "GET_GAMES_ERROR";


export const getAllGames = (dispatch) => () => {
  dispatch({
    type: GET_ALL_VIDEOGAMES,
  });

  return axios
    .get(`${GET_ALL_GAMES}`)
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
