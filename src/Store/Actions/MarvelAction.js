export const ADD_MARVEL = "ADD_MARVEL";
export const UPDATE_MARVEL = "UPDATE_MARVEL";
export const DELETE_MARVEL = "DELETE_MARVEL";


export function addMarvel (marvel) {
   return {
       type: ADD_MARVEL,
       payload: marvel,
   }
}


export function deleteMarvel (marvelId) {
    return {
        type: DELETE_MARVEL,
        payload: marvelId,
    }
}

export function updateMarvel (marvel) {
    return {
        type: UPDATE_MARVEL,
        payload: marvel,
    }
}