import { timer } from "./countDown.js"
import { sound } from "./sounds.js"
import { selector } from "./querySelect.js"
import { controls } from "./controlButtons.js"

export const main = {
  buttonPlay() {
    controls.play()
    timer.startCountDown()

    sound.buttonPressAudio.play()
  },
  buttonPause() {
    controls.pause()
    timer.pause()

    sound.buttonPressAudio.play()
  },
  buttonReset() {
    main.buttonPause()
    timer.updateDisplay()
  },
  buttonEncrement() {
    timer.encrement()

    sound.buttonPressAudio.play()
  },
  buttonDecrement() {
    timer.decrement()

    sound.buttonPressAudio.play()
  },
  buttonForest() {
    controls.forest()
  },
  buttonRain() {
    controls.rain()
  },
  buttonCoffe() {
    controls.coffeShop()
  },
  buttonCampFire() {
    controls.campFire()
  },
  lightMode() {
    controls.darkMode()
  },
  darkMode() {
    controls.lightMode()
  },
}

selector.buttonPlay.addEventListener('click', main.buttonPlay)
selector.buttonPause.addEventListener('click', main.buttonPause)
selector.buttonStop.addEventListener('click', main.buttonReset)
selector.buttonEncrement.addEventListener('click', main.buttonEncrement)
selector.buttonDecrement.addEventListener('click', main.buttonDecrement)

selector.buttonLightMode.addEventListener('click', main.lightMode)
selector.buttonDarkMode.addEventListener('click', main.darkMode)

selector.buttonSoundForest.addEventListener('click', main.buttonForest)
selector.buttonSoundRain.addEventListener('click', main.buttonRain)
selector.buttonSoundCoffe.addEventListener('click', main.buttonCoffe)
selector.buttonSoundCampFire.addEventListener('click', main.buttonCampFire)




