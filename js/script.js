const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.gallery-item img').forEach(image => {
  image.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = image.src;
    let figcaption = image.parentElement.querySelector('figcaption');
    if (figcaption) {
      captionText.innerHTML = figcaption.innerHTML;
    }
  }
});

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
};


