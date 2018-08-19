import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { rectangleActions } from '../actions'
import { rectangleTypes } from '../constants'
import { rectanglesApi } from '../api'
import { AnyAction } from 'redux'

function* fetchRectangles(action?: AnyAction) {
  if (!action) { return }
  try {
    console.log('gonna get me some rects!!')
    const response = yield call(rectanglesApi.getRectangles, action.payload)
    console.log('fetchedRactangles!', response)
    yield put(rectangleActions.setRectangles(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(rectangleActions.fetchRectanglesFailure())
  }
}

function* createRectangle(action?: AnyAction) {
  if (!action) { return }
  try {
    if (!action) { throw new Error('no action provided') }
    const response = yield call(rectanglesApi.createRectangle, action.payload)
    yield put(rectangleActions.setRectangle(response.data))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
    yield put(rectangleActions.createRectangleFailure())
  }
}

export default {
  watchFetchRectangles,
  watchCreateRectangle,
}

export function* watchFetchRectangles() {
  yield takeLatest(rectangleTypes.FETCH_RECTANGLES_REQUEST, fetchRectangles)
}

export function* watchCreateRectangle() {
  yield takeEvery(rectangleTypes.CREATE_RECTANGLE_REQUEST, createRectangle)
}