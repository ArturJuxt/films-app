import {
  ADD_SERIAL,
  UPDATE_SERIAL,
  DELETE_SERIAL,
} from "../Constants/SerialConstants";

export function addSerial(serial) {
  return {
    type: ADD_SERIAL,
    payload: serial,
  };
}

export function deleteSerial(serialId) {
  return {
    type: DELETE_SERIAL,
    payload: serialId,
  };
}

export function updateSerial(serial) {
  return {
    type: UPDATE_SERIAL,
    payload: serial,
  };
}
