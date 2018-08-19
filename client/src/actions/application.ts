import { appTypes } from '../constants'

export default {
  initializeAppRequest,
  initializeApp,
  initializeAppFailure
}

export function initializeAppRequest() {
  return {
    type: appTypes.INITIALIZE_APP_REQUEST
  }
}

export function initializeApp() {
  return {
    type: appTypes.INITIALIZE_APP_SUCCESS
  }
}

export function initializeAppFailure() {
  return {
    type: appTypes.INITIALIZE_APP_FAILURE
  }
}
