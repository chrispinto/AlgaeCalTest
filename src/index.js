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
