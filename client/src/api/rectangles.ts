import {
    apiURL,
    httpGet,
    httpPost,
  } from '../utils/http'
import { RectangleT } from '../constants'

  export default {
    getRectangles,
    createRectangle,
  }

  export function getRectangles({}: any) {
    return httpGet(`${apiURL}/rectangles`)
  }

  export function createRectangle({ rectangle }: { rectangle: RectangleT }) {
    return httpPost(`${apiURL}/rectangles`, rectangle)
  }
