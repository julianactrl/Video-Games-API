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
  ADD_NEW_GAME_ERROR
} from "./../constants";

const initialState = {
  gamesState: {
    games: [],
    search: [],
    error: null,
    loading: false,
  },
  genresState: {
    genres: [],
    error: null,
    loading: false,
  },
  gamesById: {
    gamesId: [],
    error: null,
    loading: false,
  },
  addNewGame : null,
  filterGames: [],
  genres: [],
  orderBy: "Order By",
  filterBy: "Filter By",
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
    case ADD_NEW_GAME:
      return {
        ...state,
        addNewGame: action.payload
      }
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
    case GET_GENRE:
      return {
        ...state,
        genresState: {
          genres: [],
          error: null,
          loading: true,
        },
      };
    case GET_GENRE_SUCCESS:
      return {
        ...state,
        genresState: {
          genres: action.payload,
          error: null,
          loading: false,
        },
      };
    case GET_GENRE_ERROR:
      return {
        ...state,
        genresState: {
          genres: [],
          error: true,
          loading: false,
        },
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        filterGames: action.payload.genreGame,
        filterBy: action.payload.genres,
      };
    case FILTER_BY_SOURCE:
      return {
        ...state,
        filterGames: action.payload.gettingSource,
        filterBy: action.payload.source,
      };
    case GET_GAME_ID:
      return {
        ...state,
        gamesById: {
          gamesId: {},
          error: null,
          loading: true,
        },
      };
    case GET_GAME_ID_SUCCESS:
      return {
        ...state,
        gamesById: {
          gamesId: action.payload,
          error: null,
          loading: false,
        },
      };
    case GET_GAME_ID_ERROR:
      return {
        ...state,
        gamesById: {
          gamesId: {},
          error: true,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
