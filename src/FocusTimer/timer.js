import state from "./state.js";
import * as el from './elements.js'
import * as sound from './sounds.js'

export function countDown() {

  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }
  
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    sound.kichenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)
  state.countdownId = setTimeout(() => countDown(), 1000)
}

export function incrementMinutes(){
  let minutesad = Number(el.minutes.textContent)

  minutesad = minutesad + 5
  if(minutesad > 61){
    return
  }

  updateDisplay(minutesad)
}

export function decrementMinutes(){
  let minutesre = Number(el.minutes.textContent)

  minutesre = minutesre - 5
  if(minutesre < 0){
    return
  }

  updateDisplay(minutesre)
}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
