import { combineReducers, AnyAction } from 'redux'
import { SET_FILTER, ApplicationState, filterT } from '../constants'

const availableFilters: filterT​​[] = ['ALL', 'ACTIVE', 'COMPLETED']

function filter(state = availableFilters[0], action: AnyAction) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default combineReducers({
  filter
})

export function getFilter({ filter }: ApplicationState) {
  return filter
}

export function getAllFilters(state: ApplicationState) {
  return availableFilters
}
