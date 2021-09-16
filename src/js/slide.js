import galleryItems from './app.js'

import { lightboxImage } from './refs.js'

import { fnChange } from './change.js'

export const fnSlide = (event) => {
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
