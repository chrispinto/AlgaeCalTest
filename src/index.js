/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-parens */
// import {ProductBundles} from "./modules/ProductBundles";
import { DateTime } from 'luxon';
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
});

// Getting the video to play while hiding the overlay image using found "vertical-wipe" SCSS class
window._wq = window._wq || [];
// eslint-disable-next-line no-undef
_wq.push({
  id: 'zwflowymel',
  onReady(video) {
    document.getElementById('play-button-overlay-zwflowymel').addEventListener('click', () => {
      const image = document.getElementById('play-button-overlay-zwflowymel').classList;
      image.add('vertical-wipe');
      video.play();
    });
  },
});

// Hiding the percent off bubble if it is 0%
const amounts = document.getElementsByClassName('amount');

for (let x = 0; x < amounts.length; x += 1) {
  const amount = amounts[x];
  const content = amount.innerHTML.trim();

  if (content === '0%') {
    document.querySelector('.percent-off').style.display = 'none';
  }
}

// Loading the 7 Month Guarantee Modal on click using Fetch API with the acf content
function getGuarantee() {
  fetch('https://www.algaecal.com/wp-json/acf/v3/options/options')
    .then(response => response.json())
    .then(response => {
      const guarantee = response.acf;
      document.getElementById('guarantee-modal-body').innerHTML = guarantee['7yr_full_copy'];
      // Image being pulled in was larger than modal width, adding the img-fluid class
      document.querySelector('.wp-image-62567').classList.add('img-fluid');
    });
}
document.getElementById('month-modal').addEventListener('click', getGuarantee);

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
