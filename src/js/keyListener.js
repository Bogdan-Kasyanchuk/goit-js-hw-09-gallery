import { fnCloseModal } from './closeModal.js'

import { fnSlide } from './slide.js'

export const fnKeyListener = (event) => {
  fnSlide(event)
  if (event.key === 'Escape') fnCloseModal()
}
