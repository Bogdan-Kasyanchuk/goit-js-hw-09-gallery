import { lightbox, lightboxOverlay } from './refs.js'

import { fnDelegation } from './delegation.js'

import { fnCloseModal } from './closeModal.js'

import { fnKeyListener } from './keyListener.js'

export const fnOpenModal = (event) => {
  if (event.target.nodeName !== 'IMG') return
  event.preventDefault()
  fnDelegation(event)
  lightbox.classList.toggle('is-open')
  lightboxOverlay.addEventListener('click', fnCloseModal)
  window.addEventListener('keydown', fnKeyListener)
}
