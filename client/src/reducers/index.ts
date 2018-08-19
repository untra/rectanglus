import { combineReducers } from 'redux'
import application, * as appSelectors from './application'
import { ApplicationState } from '../constants'
// import todos, * as todosSelectors from './todos'
// import filter, * as filterSelectors from './filter'
// import comments, * as commentsSelectors from './comments'
// import user, * as userSelectors from './user'

const rootReducer = combineReducers({
  application,
  // todos,
  // filter,
  // comments,
  // user
})

export default rootReducer

// export function getInitializingStatus({ application }: ApplicationState) {
//   return appSelectors.getInitializingStatus(application)
// }

// export function getAllTodos({ todos, filter }: ApplicationState) {
//   return todosSelectors.getAllTodos(todos, filter)
// }

// export function getAllTodosIds({ todos, filter }: ApplicationState) {
//   return todosSelectors.getAllTodosIds(todos, filter)
// }

// export function getFetchingStatus({ todos }: ApplicationState) {
//   return todosSelectors.getFetchingStatus(todos)
// }

// export function getCreatingStatus({ todos }: ApplicationState) {
//   return todosSelectors.getCreatingStatus(todos)
// }

// export function getSelectedTodoId({ todos }: ApplicationState) {
//   return todosSelectors.getSelectedTodoId(todos)
// }

// export function getSelectedTodo({ todos }: ApplicationState) {
//   return todosSelectors.getSelectedTodo(todos)
// }

// export function getMarkedStatus({ todos }: ApplicationState) {
//   return todosSelectors.getMarkedStatus(todos)
// }

// export function getFilter({ filter }: ApplicationState) {
//   return filterSelectors.getFilter(filter)
// }

// export function getAllFilters({ filter }: ApplicationState) {
//   return filterSelectors.getAllFilters(filter)
// }

// export function getAllComments({ comments }: ApplicationState) {
//   return commentsSelectors.getAllComments(comments)
// }

// export function getCommentsFetchingStatus({ comments }: ApplicationState) {
//   return commentsSelectors.getFetchingStatus(comments)
// }

// export function getCommentsCreatingStatus({ comments }: ApplicationState) {
//   return commentsSelectors.getCreatingStatus(comments)
// }

// export function getCurrentUser({ user }: ApplicationState) {
//   return userSelectors.getCurrentUser(user)
// }
