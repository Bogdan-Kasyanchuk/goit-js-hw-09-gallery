import galleryItems from './app.js'

import { gallery, closeLightbox } from './refs.js'

import { fnRender } from './render.js'

gallery.insertAdjacentHTML('beforeend', fnRender(galleryItems).join(''))

import { fnOpenModal } from './openModal.js'

gallery.addEventListener('click', fnOpenModal)

import { fnCloseModal } from './closeModal.js'

closeLightbox.addEventListener('click', fnCloseModal)
