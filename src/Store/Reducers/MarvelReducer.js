import { ADD_MARVEL, UPDATE_MARVEL, DELETE_MARVEL } from "../Actions/MarvelAction";
import marvels  from "../../data/Marvel.json";

const MarvelReducer = (state = marvels, action) => {
  switch (action.type) {
    case ADD_MARVEL:
      break;
    case UPDATE_MARVEL:
      break;
    case DELETE_MARVEL:
      return state.filter(marvel => marvel.id !== action.payload);
    default:
      break;
  }
  return state;
};

export default MarvelReducer;