import { lightboxImage } from './refs.js'

export const fnChange = (newSrc = '', newAlt = '') => {
  lightboxImage.setAttribute('src', newSrc)
  lightboxImage.setAttribute('alt', newAlt)
}
