import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function Togglerunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  sounds.buttonPress.play()
} 

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPress.play()
}

export function addMinutes() {
  timer.incrementMinutes()
  sounds.buttonPress.play()
}

export function removeMinutes() {
  timer.decrementMinutes()
  sounds.buttonPress.play()
}