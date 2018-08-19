import appTypes from './application'
import todosTypes from './todos'
import commentsTypes from './comments'
import userTypes from './user'
import { AnyAction } from 'redux'

export {
  appTypes,
  todosTypes,
  commentsTypes,
  userTypes
}

export * from './application'
export * from './todos'
export * from './comments'
export * from './user'

export const SET_FILTER = 'SET_FILTER'
export type filterT = 'ALL'|'ACTIVE'|'COMPLETED'|'SET_FILTER'
export type initializingAppT = (state: boolean, action: AnyAction) => boolean
export interface ApplicationState {
  initializingApp: initializingAppT
  filter: filterT
  filters: filterT[]
  user: {}
}