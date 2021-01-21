import { ADD_FILM, UPDATE_FILM, DELETE_FILM } from "../Constants/FilmConstants";
import { SET_SEARCH } from "../Constants/SearchConstants";

export function setSearch (search) {
    return {
        type: SET_SEARCH,
        payload: search,
    }
}
