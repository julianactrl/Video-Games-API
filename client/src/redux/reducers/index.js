import {
  GET_ALL_VIDEOGAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  SEARCH_GAMES,
  SEARCH_GAMES_SUCCESS,
  SEARCH_GAMES_ERROR,
} from "./../constants";

const initialState = {
  gamesState: {
    games: [],
    error: null,
    loading: false,
  },
  searchGames: {
    result: [],
    error: null,
    loading: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        gamesState: {
          games: [],
          error: null,
          loading: true,
        },
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        gamesState: {
          games: action.payload,
          error: null,
          loading: false,
        },
      };
    case GET_GAMES_ERROR:
      return {
        ...state,
        gamesState: {
          games: [],
          error: true,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
