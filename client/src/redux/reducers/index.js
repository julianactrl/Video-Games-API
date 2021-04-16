import { GET_ALL_VIDEOGAMES, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from './../constants'

const initialState = {
  games: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_VIDEOGAMES:
        return {
          ...state,
          games: action.payload,
        };
      case G
  
      default:
        return state;
    }
};

export default rootReducer;