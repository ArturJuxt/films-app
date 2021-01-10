import { SET_FILTER } from "../Constants/FilterConstants";

const FilterReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      break;
  }
  return state;
};

export default FilterReducer;