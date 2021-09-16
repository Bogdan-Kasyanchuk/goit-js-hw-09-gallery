import { lightbox } from './refs.js'

import { fnChange } from './change.js'

import { fnKeyListener } from './keyListener.js'

export const fnCloseModal = () => {
  fnChange()
  lightbox.classList.toggle('is-open')
  window.removeEventListener('keydown', fnKeyListener)
}
