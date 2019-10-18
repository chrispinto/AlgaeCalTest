// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
});
// Getting the video to play function
// eslint-disable-next-line no-underscore-dangle
window._wq = window._wq || [];
// eslint-disable-next-line no-undef
_wq.push({
  id: 'zwflowymel',
  onReady(video) {
    document.getElementById('play-button-overlay-zwflowymel').addEventListener('click', () => {
    // Once video is loaded and overlay image is clicked, remove the overlay image
      document.getElementById('play-button-overlay-zwflowymel').remove();
      video.play();
    });
  },
});
// Hiding percent off bubble if the value is 0%
const amounts = document.getElementsByClassName('amount');
// eslint-disable-next-line no-plusplus
for (let x = 0; x < amounts.length; x++) {
  const amount = amounts[x];
  const content = amount.innerHTML.trim();

  // eslint-disable-next-line eqeqeq
  if (content == '0%') {
    document.querySelector('.percent-off').style.display = 'none';
  }
}
