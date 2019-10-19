/* eslint-disable no-use-before-define */
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

// Hiding the percent off bubble if the value is 0%
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

// Load Guarantee Modal on Click with Ajax content
document.getElementById('month-modal').addEventListener('click', loadOptions);
function loadOptions() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options', true);

  // eslint-disable-next-line func-names
  xhr.onload = function () {
    if (this.status === 200) {
      const options = JSON.parse(this.responseText);
      const guarantee = options.acf;

      document.getElementById('guarantee-modal-body').innerHTML = guarantee['7yr_full_copy'];

      // Image being pulled in was larger than modal width, so I added the img-fluid class
      document.querySelector('.wp-image-62567').classList.add('img-fluid');
    }
  };
  xhr.send();
}
