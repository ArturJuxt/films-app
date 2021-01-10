import { combineReducers } from "redux";
import SerialReducer from "./SerialReducer";
import MarvelReducer from "./MarvelReducer";
import FilmReducer from "./FilmReducer";
import CategoryReducer from "./CategoryReducer";
import FilterReducer from "./FilterReducer";

const RootReducer = combineReducers({
   serials: SerialReducer,
   marvels: MarvelReducer,
   films: FilmReducer,
   categories: CategoryReducer,
   filter: FilterReducer,
});

export default RootReducer;
