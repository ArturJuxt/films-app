import { SET_FILTER } from "../Constants/FilterConstants";

export function setFilter (category = 0) {
    return {
        type: SET_FILTER,
        payload: category
    }
}