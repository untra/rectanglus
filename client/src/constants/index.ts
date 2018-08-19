import appTypes from './application'
import todosTypes from './todos'
import commentsTypes from './comments'
import userTypes from './user'
import rectangleTypes, { RectangleT } from './rectangles'
import { AnyAction } from 'redux'

export {
  appTypes,
  todosTypes,
  commentsTypes,
  userTypes,
  rectangleTypes
}

export * from './application'
export * from './todos'
export * from './comments'
export * from './user'
export * from './rectangles'

export const SET_FILTER = 'SET_FILTER'
export type filterT = 'ALL'|'ACTIVE'|'COMPLETED'|'SET_FILTER'
export type initializingAppT = (state: boolean, action: AnyAction) => boolean
export interface ApplicationState {
  initializingApp: initializingAppT
  filter: filterT
  filters: filterT[]
  user: {}
  rectangles: RectangleT[]
}