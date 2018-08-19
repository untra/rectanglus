import { SET_FILTER, filterT } from '../constants'

export default {
  setFilter
}

export function setFilter(filter: filterT) {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
}
