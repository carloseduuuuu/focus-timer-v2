import { controls } from './elements.js';
import * as actions from './actions.js' 
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function registrerControls(){
  controls.addEventListener('click', (event)  => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()

  })

  //sons da aplicação
  el.selectorSounds.buttonSoundForest.addEventListener('click', ()=>{
    if (sounds.forestAudio.paused){
      sounds.forestAudio.play()
    }else {
      sounds.forestAudio.pause()
    }
  })
  el.selectorSounds.buttonSoundRain.addEventListener('click',()=>{
    if (sounds.rainAudio.paused) {
      sounds.rainAudio.play()

    }else {
      sounds.rainAudio.pause()

    }
  })
  el.selectorSounds.buttonLofiSound.addEventListener('click', ()=>{
    if (sounds.lofiAudio.paused){
      sounds.lofiAudio.play()
    } else {
      sounds.lofiAudio.pause()
    }
  })
  el.selectorSounds.buttonSoundCampFire.addEventListener('click', ()=>{
    if (sounds.fireplaceAudio.paused){
      sounds.fireplaceAudio.play()
    }else {
      sounds.fireplaceAudio.pause()
      
    }
  })
}