import {
  GET_ALL_VIDEOGAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  SEARCH_GAMES,
} from "./../constants";
import axios from "axios";

const backURL = process.env.API_URL
console.log(backURL)

export const getAllGames = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_VIDEOGAMES,
  });
  return await axios
    .get(`${backURL}`)
    .then((res) => {
      dispatch({
        type: GET_GAMES_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_GAMES_ERROR,
        payload: err.response,
      });
    });
};

// export const searchGamesQuery = () => async(data)=> {
//   dispatch({
//     trype: SEARCH_GAMES
//   })
//   return await axios
//   .get('')
// }