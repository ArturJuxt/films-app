import { combineReducers } from "redux";
import SerialReducer from "./SerialReducer";
import MarvelReducer from "./MarvelReducer";

const RootReducer = combineReducers({
   serials: SerialReducer,
   marvels: MarvelReducer,
});

export default RootReducer;
