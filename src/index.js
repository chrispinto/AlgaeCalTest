// import {ProductBundles} from "./modules/ProductBundles";
import { DateTime } from 'luxon';
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

for (let x = 0; x < amounts.length; x += 1) {
  const amount = amounts[x];
  const content = amount.innerHTML.trim();

  if (content === '0%') {
    document.querySelector('.percent-off').style.display = 'none';
  }
}

// Load Guarantee Modal on Click with Ajax content
// eslint-disable-next-line no-use-before-define
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

// Utilizing the LuxonJS library to hide Speak to our Specialists when office is closed
const today = DateTime.local(); // Gets user's current time
const local = today.setZone('America/Vancouver'); // Converts user's current time to Vancouver's timezone
const time = local.get('hour'); // Gets the hour from the newly created time instance
const day = local.get('weekday'); // Gets the weekday from the current time instance

// If it is before 6am or after 4pm Monday - Friday hide speak to our specalists
if (day < 6) {
  if (time < 6 || time >= 16) {
    const speak = document.querySelector('.speak-to-our-bone-specialists').classList;
    speak.remove('d-md-block');
  }
}
// If it is before 7am or after 5pm on Saturday or Sunday hide speak to our specalists
if (day >= 6) {
  if (time < 7 || time >= 17) {
    const speak = document.querySelector('.speak-to-our-bone-specialists').classList;
    speak.remove('d-md-block');
  }
}
