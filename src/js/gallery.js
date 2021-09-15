import galleryItems from './app.js'

import {
  gallery,
  lightbox,
  lightboxImage,
  closeLightbox,
  lightboxOverlay,
} from './refs.js'

import { fnRender } from './render.js'

gallery.insertAdjacentHTML('beforeend', fnRender(galleryItems).join(''))

import { fnDelegation } from './delegation.js'

export const fnChange = (newSrc = '', newAlt = '') => {
  lightboxImage.setAttribute('src', newSrc)
  lightboxImage.setAttribute('alt', newAlt)
}

const fnOpenModalWindow = (event) => {
  if (event.target.nodeName !== 'IMG') return
  event.preventDefault()
  fnDelegation(event)
  lightbox.classList.toggle('is-open')
  lightboxOverlay.addEventListener('click', fnCloseModalWindow)
  window.addEventListener('keydown', fnKeyListener)
}

gallery.addEventListener('click', fnOpenModalWindow)

const fnCloseModalWindow = () => {
  fnChange()
  lightbox.classList.toggle('is-open')
  window.removeEventListener('keydown', fnKeyListener)
}

closeLightbox.addEventListener('click', fnCloseModalWindow)

const fnSlide = (event) => {
  const index = galleryItems.findIndex(
    (element) => element.original === lightboxImage.getAttribute('src'),
  )

  if (event.code === 'ArrowLeft') {
    index === 0
      ? fnChange(
          galleryItems[galleryItems.length - 1].original,
          galleryItems[galleryItems.length - 1].description,
        )
      : fnChange(
          galleryItems[index - 1].original,
          galleryItems[index - 1].description,
        )
  }
  if (event.code === 'ArrowRight') {
    index === galleryItems.length - 1
      ? fnChange(galleryItems[0].original, galleryItems[0].description)
      : fnChange(
          galleryItems[index + 1].original,
          galleryItems[index + 1].description,
        )
  }
}

const fnKeyListener = (event) => {
  fnSlide(event)
  if (event.key === 'Escape') fnCloseModalWindow()
}
