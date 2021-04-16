import { GET_ALL_VIDEOGAMES } from './../constants'

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
  
      default:
        return state;
    }
};

export default rootReducer;