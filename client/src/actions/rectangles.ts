import { rectangleTypes, RectangleT } from '../constants'

export const fetchRectanglesRequest = () => {
  return {
    type: rectangleTypes.FETCH_RECTANGLES_REQUEST,
    payload: {}
  }
}

export const setRectangles = (rectangles: RectangleT[]) => {
  return {
    type: rectangleTypes.FETCH_RECTANGLES_SUCCESS,
    payload: {
      rectangles
    }
  }
}

export const fetchRectanglesFailure = () => {
  return {
    type: rectangleTypes.FETCH_RECTANGLES_FAILURE
  }
}

export const createRectangleRequest = (rectangle: RectangleT) => {
  return {
    type: rectangleTypes.CREATE_RECTANGLE_REQUEST,
    payload: {
      rectangle
    }
  }
}

export const setRectangle = (rectangle: RectangleT) => {
  return {
    type: rectangleTypes.CREATE_RECTANGLE_SUCCESS,
    payload: {
      rectangle
    }
  }
}

export const createRectangleFailure = () => {
  return {
    type: rectangleTypes.CREATE_RECTANGLE_FAILURE
  }
}

export default {
  fetchRectanglesRequest,
  setRectangles,
  fetchRectanglesFailure,
  createRectangleRequest,
  setRectangle,
  createRectangleFailure,
}
