import { ADD_FILM, UPDATE_FILM, DELETE_FILM } from "../Constants/FilmConstants";
import films  from "../../data/Films.json";

const FilmReducer = (state = films, action) => {
  switch (action.type) {
    case ADD_FILM:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    case UPDATE_FILM:
      break;
    case DELETE_FILM:
      return state.filter(film => film.id !== action.payload);
    default:
      break;
  }
  return state;
};

export default FilmReducer;