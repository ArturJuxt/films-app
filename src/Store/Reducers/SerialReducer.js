import {
  ADD_SERIAL,
  UPDATE_SERIAL,
  DELETE_SERIAL,
} from "../Constants/SerialConstants";
import { serials } from "../../Store/States/States";

const SerialReducer = (state = serials, action) => {
  switch (action.type) {
    case ADD_SERIAL:
      return [...state, action.payload];
    case UPDATE_SERIAL:
      return state.map((serial) =>
        serial.id === action.payload.id ? action.payload : serial
      );
    case DELETE_SERIAL:
      return state.filter((serial) => serial.id !== action.payload);
    default:
      break;
  }
  return state;
};

export default SerialReducer;
