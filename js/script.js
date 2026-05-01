const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.gallery-item img').forEach(image => {
  image.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = image.src;
    captionText.innerHTML = image.parentElement.querySelector('figcaption').innerHTML;
  }
});

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

lightbox.onclick = (e) => {
  if (e.target !== lightboxImg && e.target !== captionText) {
    lightbox.style.display = 'none';
  }
};