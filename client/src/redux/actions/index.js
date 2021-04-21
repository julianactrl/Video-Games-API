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
  FILTER_BY_GENRE,
  FILTER_BY_SOURCE,
  ADD_NEW_GAME,
  ADD_NEW_GAME_SUCCESS,
  ADD_NEW_GAME_ERROR,
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

// POST A NEW GAME
export const postNewGame = (body) => async (dispatch) => {
  console.log("soy el body", body);
  dispatch({
    type: ADD_NEW_GAME,
  });
  return await axios
    .post(`http://localhost:3001/videogames`, body)
    .then((p) => {
      dispatch({
        type: ADD_NEW_GAME_SUCCESS,
        payload: p.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_NEW_GAME_ERROR,
        payload: err.response,
      });
    });
};

// GETTING GAMES FROM DB
export const getGamesById = (id) => async (dispatch) => {
  console.log("get id actions", id);
  dispatch({
    type: GET_GAME_ID,
  });
  return await axios
    .get(`http://localhost:3001/videogames/${id}`)
    .then((i) => {
      const result = i.data;
      // console.log(result.genres.map(e => e.name).join(', '))
      dispatch({
        type: GET_GAME_ID_SUCCESS,
        payload: result,
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
  const orderBy = getState().orderBy.slice();
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
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
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
      const gamesOrder = filterGames.sort((a, b) => a.rating - b.rating);
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
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
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
  const orderBy = getState().orderBy.slice();
  const games = getState().gamesState.games;
  const filterGames = getState().filterGames;

  if (orderBy === "Order By") {
    if (sort === "lowest") {
      const gamesOrder = games.sort((a, b) => b.rating - a.rating);
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
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
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
      const gamesOrder = filterGames.sort((a, b) => b.rating - a.rating);
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
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
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
export const filterByGenres = (genres) => (dispatch, getState) => {
  let filterByGenre = [];
  if (genres === "Filter By") {
    filterByGenre = getState().gamesState.games;
  } else {
    filterByGenre = getState().gamesState.games.filter((game) =>
      (game.genres || []).includes(genres)
    );
  }
  dispatch({
    type: FILTER_BY_GENRE,
    payload: {
      genres,
      genreGame: filterByGenre,
    },
  });
};

export const filterBySource = (source) => (dispatch, getState) => {
  if (source === "Filter By") {
    const sourceGame = getState().gamesState.games;
    dispatch({
      type: FILTER_BY_SOURCE,
      payload: {
        source,
        filterSource: sourceGame,
      },
    });
  } else {
    const gettingSource = getState()
      .gamesState.games.slice()
      .filter((g) => {
        return g.source === source;
      });
    dispatch({
      type: FILTER_BY_SOURCE,
      payload: {
        gettingSource,
        source,
      },
    });
  }
};
