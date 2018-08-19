import { todosTypes, TodoT } from '../constants'

export default {
  fetchTodosRequest,
  setTodos,
  fetchTodosFailure,
  createTodoRequest,
  setTodo,
  createTodoFailure,
  updateTodoRequest,
  updateTodo,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodo,
  deleteTodoFailure,
  selectTodo,
  toggleAllTodosRequest,
  toggleAllTodos,
  toggleAllTodosFailure,
  deleteAllTodosRequest,
  deleteAllTodos,
  deleteAllTodosFailure
}

export function fetchTodosRequest() {
  return {
    type: todosTypes.FETCH_TODOS_REQUEST
  }
}

export function setTodos(todos: TodoT[]) {
  return {
    type: todosTypes.FETCH_TODOS_SUCCESS,
    payload: {
      todos
    }
  }
}

export function fetchTodosFailure() {
  return {
    type: todosTypes.FETCH_TODOS_FAILURE
  }
}

export function createTodoRequest(todo: TodoT) {
  return {
    type: todosTypes.CREATE_TODO_REQUEST,
    payload: {
      todo
    }
  }
}

export function setTodo(todo: TodoT) {
  return {
    type: todosTypes.CREATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function createTodoFailure() {
  return {
    type: todosTypes.CREATE_TODO_FAILURE
  }
}

export function updateTodoRequest(id: number, changes: []) {
  return {
    type: todosTypes.UPDATE_TODO_REQUEST,
    payload: {
      id,
      changes
    }
  }
}

export function updateTodo(todo: TodoT) {
  return {
    type: todosTypes.UPDATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function updateTodoFailure(id: number) {
  return {
    type: todosTypes.UPDATE_TODO_FAILURE,
    payload: {
      id
    }
  }
}

export function deleteTodoRequest(id: number) {
  return {
    type: todosTypes.DELETE_TODO_REQUEST,
    payload: {
      id
    }
  }
}

export function deleteTodo(id: number) {
  return {
    type: todosTypes.DELETE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteTodoFailure(id: number) {
  return {
    type: todosTypes.DELETE_TODO_FAILURE,
    payload: {
      id
    }
  }
}

export function selectTodo(id: number) {
  return {
    type: todosTypes.SELECT_TODO,
    payload: {
      id
    }
  }
}

export function toggleAllTodosRequest(ids: number[], completed: number[]) {
  return {
    type: todosTypes.TOGGLE_ALL_TODOS_REQUEST,
    payload: {
      ids,
      completed
    }
  }
}

export function toggleAllTodos(todos: TodoT[]) {
  return {
    type: todosTypes.TOGGLE_ALL_TODOS_SUCCESS,
    payload: {
      todos
    }
  }
}

export function toggleAllTodosFailure() {
  return {
    type: todosTypes.TOGGLE_ALL_TODOS_FAILURE
  }
}

export function deleteAllTodosRequest(ids: number[]) {
  return {
    type: todosTypes.DELETE_ALL_TODOS_REQUEST,
    payload: {
      ids
    }
  }
}

export function deleteAllTodos() {
  return {
    type: todosTypes.DELETE_ALL_TODOS_SUCCESS
  }
}

export function deleteAllTodosFailure() {
  return {
    type: todosTypes.DELETE_ALL_TODOS_FAILURE
  }
}
