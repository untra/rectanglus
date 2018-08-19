import {
  apiURL,
  httpGet,
  httpPost,
  httpUpdate,
  httpDelete
} from '../utils/http'

export default {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}

export function getTodos() {
  return httpGet(`${apiURL}/todos`)
}

export function createTodo({ todo }: any) {
  return httpPost(`${apiURL}/todos`, todo)
}

export function updateTodo({ id, changes }: any) {
  return httpUpdate(`${apiURL}/todos/${id}`, changes)
}

export function deleteTodo({ id }: any) {
  return httpDelete(`${apiURL}/todos/${id}`)
}
