import { SET_SEARCH } from "../Constants/SearchConstants";

const SearchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default SearchReducer;
