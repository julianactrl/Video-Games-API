import {
  GET_ALL_VIDEOGAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  SEARCH_GAMES,
  SEARCH_GAMES_SUCCESS,
  SEARCH_GAMES_ERROR,
  GET_GENRE,
  GET_GENRE_SUCCESS,
  GET_GENRE_ERROR,
  ORDER_ASC_NAME,
  ORDER_ASC_RATING,
  ORDER_DESC_NAME,
  ORDER_DESC_RATING,
  GET_GAME_ID,
  GET_GAME_ID_SUCCESS,
  GET_GAME_ID_ERROR,
} from "./../constants";
import axios from "axios";


// GETTING ALL GAMES FROM API AND DB 137
export const getAllGames = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_VIDEOGAMES,
  });
  return await axios
    .get("http://localhost:3001/videogames")
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

// SEARCH GAMES BY QUERY = NAME
export const searchGamesQuery = (input) => async (dispatch) => {
  dispatch({
    type: SEARCH_GAMES,
  });
  return await axios
    .get(`http://localhost:3001/videogames/search?search=${input}`)
    .then((r) => {
      dispatch({
        type: SEARCH_GAMES_SUCCESS,
        payload: r.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_GAMES_ERROR,
        payload: err.response,
      });
    });
};

// GETTING GENRES FROM DB AND ORDER BY
export const getGenresDb = () => async (dispatch) => {
  dispatch({
    type: GET_GENRE,
  });
  return await axios
    .get("http://localhost:3001/genres")
    .then((g) => {
      dispatch({
        type: GET_GENRE_SUCCESS,
        payload: g.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GENRE_ERROR,
        payload: err.response,
      });
    });
};

// GETTING GAMES FROM DB
export const getGamesById = (id) => async (dispatch) => {
  console.log('get id', dispatch)
  dispatch({
    type: GET_GAME_ID,
  });
  return await axios
    .get(`http://localhost:3001/videogames/${id}`)
    .then((g) => {
      console.log('data id', g)
      dispatch({
        type: GET_GAME_ID_SUCCESS,
        payload: g.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GAME_ID_ERROR,
        payload: err.response,
      });
    });
};

// ORDENAMIENTO ASCENDENTE Y DESCENDENTE RATING Y NAME
export const orderBy = (sort) => (dispatch, getState) => {
  const orderBy = getState().orderBy;
  const games = getState().gamesState.games.slice();
  const filterGames = getState().filterGames.slice();

  if (orderBy === "Order By") {
    if (sort === "highest") {
      const gamesOrder = games.sort((a, b) => a.rating - b.rating);
      dispatch({
        type: ORDER_ASC_RATING,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    } 
    if (sort === "az") {
      const gamesOrder = games.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0;
      });
      dispatch({
        type: ORDER_ASC_NAME,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
  } else {
    if (sort === "highest") {
      const gamesOrder = filterGames.sort(
        (a, b) => a.rating - b.rating
      );
      dispatch({
        type: ORDER_ASC_RATING,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
    if (sort === "az") {
      const gamesOrder = filterGames.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0;
      });
      dispatch({
        type: ORDER_ASC_NAME,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
  }
};

export const orderByDesc = (sort) => (dispatch, getState) => {
  const orderBy = getState().orderBy;
  const games = getState().gamesState.games.slice();
  const filterGames = getState().filterGames.slice();

  if (orderBy === "Order By") {
    if (sort === "lowest") {
      const gamesOrder = games.sort(
        (a, b) => b.rating - a.rating
      );
      dispatch({
        type: ORDER_DESC_RATING,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
    if (sort === "za") {
      const gamesOrder = games.sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      });
      dispatch({
        type: ORDER_DESC_NAME,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
  } else {
    if (sort === "lowest") {
      const gamesOrder = filterGames.sort(
        (a, b) => b.rating - a.rating
      );
      dispatch({
        type: ORDER_DESC_RATING,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
    if (sort === "za") {
      const gamesOrder = filterGames.sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      });
      dispatch({
        type: ORDER_DESC_NAME,
        payload: {
          gamesOrder,
          name: sort,
        },
      });
    }
  }
};

// FILTER GENRES Y CREATE
