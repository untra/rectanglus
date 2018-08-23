import appTypes from './application'
import userTypes from './user'
import rectangleTypes, { RectangleT } from './rectangles'
import { AnyAction } from 'redux'

export {
  appTypes,
  userTypes,
  rectangleTypes
}

export * from './application'
export * from './user'
export * from './rectangles'

export type initializingAppT = (state: boolean, action: AnyAction) => boolean
export interface ApplicationState {
  initializingApp: initializingAppT
  user: {}
  rectangles: RectangleT[]
}
