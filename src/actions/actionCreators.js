const ADD_SERVICE = 'ADD_SERVICE';
const CANCEL_SERVICE = 'CANCEL_SERVICE';
const REMOVE_SERVICE = 'REMOVE_SERVICE';
const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
const SEARCH_SERVICE = 'SEARCH_SERVICE'

export function addService(name, price, id) {
  return {type: ADD_SERVICE, payload: {name, price, id}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeService(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function cancelService() {
  return {type: CANCEL_SERVICE};
}

export function searchlService(search) {
  return {type: SEARCH_SERVICE, payload: {search}}
}
