import { ADD_SERIAL, UPDATE_SERIAL, DELETE_SERIAL } from "../Actions/SerialAction";
import serials  from "../../data/Films.json";

const FilmReducer = (state = serials, action) => {
  switch (action.type) {
    case ADD_SERIAL:
      break;
    case UPDATE_SERIAL:
      break;
    case DELETE_SERIAL:
      return state.filter(serial => serial.id !== action.payload);
    default:
      break;
  }
  return state;
};

export default FilmReducer;