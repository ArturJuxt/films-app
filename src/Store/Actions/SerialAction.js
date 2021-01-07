// import { serials } from "../States/States";

export const ADD_SERIAL = "ADD_SERIAL";
export const DELETE_SERIAL = "DELETE_SERIAL";
export const UPDATE_SERIAL = "UPDATE_SERIAL";


export function addSerial (serial) {
   return {
       type: ADD_SERIAL,
       payload: serial,
   }
}


export function deleteSerial (serialId) {
    return {
        type: DELETE_SERIAL,
        payload: serialId,
    }
}

export function updateSerial (serial) {
    return {
        type: UPDATE_SERIAL,
        payload: serial,
    }
}