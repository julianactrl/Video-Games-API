import {
  GET_ALL_VIDEOGAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  SEARCH_GAMES,
  SEARCH_GAMES_SUCCESS,
  SEARCH_GAMES_ERROR,
} from "./../constants";
import axios from "axios";

// const backURL = process.env.API_URL
// console.log(backURL)

export const getAllGames = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_VIDEOGAMES,
  });
  return await axios
    .get('http://localhost:3001/videogames')
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

export const searchGamesQuery = (input) => async(dispatch)=> {
  console.log('SOY EL INPUT DE SEARCH', input)
  console.log('SOY EL TYPE', dispatch)
  dispatch({
    type: SEARCH_GAMES,
  })
  return await axios
  .get(`http://localhost:3001/videogames/search?search=${input}`)
  .then(r => {
    dispatch({
      type: SEARCH_GAMES_SUCCESS,
      payload: r.data
    })
  })
  .catch(err => {
    dispatch({
      type: SEARCH_GAMES_ERROR,
      payload: err.response
    })
  })
}