import { combineReducers } from "redux";
import SerialReducer from "./SerialReducer";
import MarvelReducer from "./MarvelReducer";
import FilmReducer from "./FilmReducer";
import CategoryReducer from "./CategoryReducer";
import FilterReducer from "./FilterReducer";
import SearchReducer from "./SearchReducer";

const RootReducer = combineReducers({
   serials: SerialReducer,
   marvels: MarvelReducer,
   films: FilmReducer,
   categories: CategoryReducer,
   filter: FilterReducer,
   search: SearchReducer,
});

export default RootReducer;
