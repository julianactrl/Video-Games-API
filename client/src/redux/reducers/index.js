import { GET_ALL_VIDEOGAMES, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from './../constants'

const initialState = {
  games: [],
  error: null,
  fetching: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_VIDEOGAMES:
        return {
          ...state, fetching: true
        };
      case GET_GAMES_SUCCESS:
        return { ...state, fetching: false, games: action.payload}
      case GET_GAMES_ERROR:
        return { ...state, fetching: false, error: action.payload };
        
  
      default:
        return state;
    }
};

export default rootReducer;