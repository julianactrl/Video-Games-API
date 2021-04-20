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
} from "./../constants";

const initialState = {
  gamesState: {
    games: [],
    search: [],
    error: null,
    loading: false,
  },
  filterGames: [],
  orderBy: "Order By",
  filterBy: "Filter By",
  loading: false,
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
    case SEARCH_GAMES:
      return {
        ...state,
        gamesState: {
          search: [],
          error: null,
          loading: true,
        },
      };
    case SEARCH_GAMES_SUCCESS:
      return {
        ...state,
        gamesState: {
          search: action.payload,
          error: null,
          loading: false,
        },
      };
    case SEARCH_GAMES_ERROR:
      return {
        ...state,
        gamesState: {
          search: [],
          error: true,
          loading: false,
        },
      };
    case ORDER_ASC_NAME:
      return {
        ...state,
        filterGames: action.payload.gamesOrder,
        orderBy: action.payload.name,
      };
    case ORDER_ASC_RATING:
      return {
        ...state,
        filterGames: action.payload.gamesOrder,
        orderBy: action.payload.name,
      };
    case ORDER_DESC_NAME:
      return {
        ...state,
        filterGames: action.payload.gamesOrder,
        orderBy: action.payload.name,
      };
    case ORDER_DESC_RATING:
      return {
        ...state,
        filterGames: action.payload.gamesOrder,
        orderBy: action.payload.name,
      };

    default:
      return state;
  }
};

export default rootReducer;
