import * as React from 'react'
import './App.css'
import { rectangleActions } from '../actions'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState, RectangleT } from '../constants'

const CANVAS_ID = 'cvs'
const CANVAS_INITIAL_WIDTH = '640px'
const CANVAS_INITIAL_HEIGHT = '480px'

interface AppStatePropsT {
  rectangles: RectangleT[]
}

interface AppDispatchPropsT {
  fetchRectangles: () => RectangleT[]
  createRectangle: (r: RectangleT) => RectangleT[]
}

type AppPropsT = AppStatePropsT | AppDispatchPropsT

const handleOnClick = (canvas: HTMLElement) => {
  let drag = false
  let x0 = 0.0
  let y0 = 0.0
  const { offsetLeft, offsetTop } = canvas
  const { clientWidth, clientHeight } = canvas

  const dragStart = (e: MouseEvent) => {
    if (!drag) {
      drag = true
      const { pageX, pageY } = e
      const clickX = pageX - offsetLeft
      const clickY = pageY - offsetTop
      x0 = clickX / (clientWidth || 1)
      y0 = clickY / (clientHeight || 1)
    }
  }
  const dragEnd = (e: MouseEvent) => {
    if (drag) {
      drag = false
      const { pageX, pageY } = e
      const clickX = pageX - offsetLeft
      const clickY = pageY - offsetTop
      const x1 = clickX / (clientWidth || 1)
      const y1 = clickY / (clientHeight || 1)
      console.log(`(${x0},${y0}) - (${x1},${y1})`)
      const rectangle = { x0, y0, x1, y1 }
      dispatch({type: rectangleActions.createRectangleRequest, payload: { rectangle }})
    }
  }
  canvas.addEventListener('mousedown', dragStart, false)
  canvas.addEventListener('mouseup', dragEnd, false)
}

const handleResize = (canvas: HTMLElement) => {
  const resize = (canvas: HTMLElement) => {
    canvas.setAttribute('width', `${window.innerWidth}px`)
    canvas.setAttribute('height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', () => resize(canvas), false)
  resize(canvas)
  console.log('!LOAD')
}

const fullScreenTheCanvas = () => {
  const canvas  = document.getElementById(CANVAS_ID)
  canvas ? handleResize(canvas) : console.error('canvas not found')
  canvas ? handleOnClick(canvas) : console.error('canvas not found')
  console.log('!FULLSCREEN')
}

const App = () => {
  window.addEventListener('load', fullScreenTheCanvas, false)
  return (<canvas id={CANVAS_ID} width={CANVAS_INITIAL_WIDTH} height={CANVAS_INITIAL_HEIGHT} />)
}

const mapStateToProps = (state: ApplicationState): AppStatePropsT => ({
  rectangles: state.rectangles
})

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): AppDispatchPropsT => ({
  fetchRectangles: () => dispatch(rectangleActions.fetchRectanglesRequest()),
  createRectangle: (rectangle: RectangleT) => dispatch(rectangleActions.createRectangleRequest(rectangle))
})

export default App
