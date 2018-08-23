import {
    apiURL,
    httpGet,
    httpUpdate,
  } from '../utils/http'
import { RectangleT } from '../constants'

  export default {
    getRectangles,
    createRectangle,
  }

  export function getRectangles({}: object) {
    return httpGet(`${apiURL}/rectangles`)
  }

  export function createRectangle({ rectangle }: { rectangle: RectangleT }) {
    return httpUpdate(`${apiURL}/rectangles`, rectangle)
  }
