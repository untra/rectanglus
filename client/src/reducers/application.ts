import { combineReducers, Action } from 'redux'
import { appTypes, ApplicationState, initializingAppT } from '../constants'


const initializingApp: initializingAppT = (state = false, action: Action) => {
  switch (action.type) {
    case appTypes.INITIALIZE_APP_REQUEST:
      return true
    case appTypes.INITIALIZE_APP_SUCCESS:
    case appTypes.INITIALIZE_APP_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  initializingApp
})

export function getInitializingStatus({ initializingApp }: ApplicationState) {
  return initializingApp
}
