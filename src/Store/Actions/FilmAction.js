import { ADD_FILM, UPDATE_FILM, DELETE_FILM } from "../Constants/FilmConstants";

export function addFilm (film) {
    return {
        type: ADD_FILM,
        payload: film,
    }
}

export function updateFilm (film) {
    return {
        type: UPDATE_FILM,
        payload: film,
    }
}

export function deleteFilm (filmId) {
    return {
        type: DELETE_FILM,
        payload: filmId,
    }
}