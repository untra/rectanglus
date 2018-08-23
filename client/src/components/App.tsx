import * as React from 'react'
import './App.css'
import { rectangleActions } from '../actions'
import { Dispatch } from 'redux'
import { ApplicationState, RectangleT } from '../constants'
import { connect } from 'react-redux'

const CANVAS_ID = 'cvs'
const CANVAS_INITIAL_WIDTH = '640px'
const CANVAS_INITIAL_HEIGHT = '480px'

interface AppStatePropsT {
  rectangles: RectangleT[]
}

interface AppDispatchPropsT {
  fetchRectangles: () => any
  createRectangle: (r: RectangleT) => any
}

type AppPropsT = AppStatePropsT & AppDispatchPropsT

const baseApp: React.StatelessComponent<AppPropsT> = (props: AppPropsT) => {
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
    const canvas = document.getElementById(CANVAS_ID)
    canvas ? handleResize(canvas) : console.error('canvas not found')
    canvas ? handleOnClick(canvas) : console.error('canvas not found')
    console.log('!FULLSCREEN')
  }

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
        const rectangle: RectangleT = { x0, y0, x1, y1 }
        props.createRectangle(rectangle)
      }
    }
    canvas.addEventListener('mousedown', dragStart, false)
    canvas.addEventListener('mouseup', dragEnd, false)
  }

  window.addEventListener('load', fullScreenTheCanvas, false)
  props.fetchRectangles()
  return (<canvas id={CANVAS_ID} width={CANVAS_INITIAL_WIDTH} height={CANVAS_INITIAL_HEIGHT} />)
}

const mapStateToProps = (state: ApplicationState): AppStatePropsT => ({
  rectangles: state.rectangles
})

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): AppDispatchPropsT => ({
  fetchRectangles: () => dispatch(rectangleActions.fetchRectanglesRequest()),
  createRectangle: (r: RectangleT) => dispatch(rectangleActions.createRectangleRequest(r))
})

const App = connect(mapStateToProps, mapDispatchToProps)(baseApp)

export default App
