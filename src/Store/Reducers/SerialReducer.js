import {
  ADD_SERIAL,
  UPDATE_SERIAL,
  DELETE_SERIAL,
} from "../Actions/SerialAction";
import { serials } from "../../Store/States/States";

const SerialReducer = (state = serials, action) => {
  switch (action.type) {
    case ADD_SERIAL:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    case UPDATE_SERIAL:
      break;
    case DELETE_SERIAL:
      return state.filter((serial) => serial.id !== action.payload);
    default:
      break;
  }
  return state;
};

export default SerialReducer;
