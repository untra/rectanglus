import * as React from 'react'
import './App.css'

const CANVAS_ID = 'cvs'
const CANVAS_INITIAL_WIDTH = '640px'
const CANVAS_INITIAL_HEIGHT = '480px'

const handleOnClick = (canvas: HTMLElement) => {
  const { offsetLeft, offsetTop } = canvas
  const { clientWidth, clientHeight } = canvas
  const clickEvent = (e: MouseEvent) => {
    const { pageX, pageY } = e
    const clickX = pageX - offsetLeft
    const clickY = pageY - offsetTop
    const posX = clickX / (clientWidth || 1)
    const posY = clickY / (clientHeight || 1)
    console.log(`${posX} - ${posY}`)
  }
  canvas.addEventListener('click', clickEvent, false)
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

export default App
