export function createGallery(images) {
  return `
    <li class="gallery-item">
      <div class="image-wrap">
          <a href="${images.largeImageURL}" data-lightbox="gallery" data-title="${images.tags}">
            <img src="${images.webformatURL}" alt="${images.tags}" loading="lazy" />
          </a>
      </div>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${images.likes}</p>
        <p class="info-item"><b>Views</b> ${images.views}</p>
        <p class="info-item"><b>Comments</b> ${images.comments}</p>
        <p class="info-item"><b>Downloads</b> ${images.downloads}</p>
      </div>
    </li>
  `;
}

export function clearGallery(galleryEl) {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

export function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}
