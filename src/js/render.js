export const fnRender = (array) =>
  array.map(
    (element) =>
      `<li class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/></a></li>`,
  )
