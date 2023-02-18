'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const buton = document.querySelector('.submit');
const text = document.querySelector('.text');

// /////////////////////////////////////
// trimite cererea catre server (API)
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//   });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]);
      const html = ` <article class="country">
<img class="country__img" src="${data[0].flag}" />
 <div class="country__data">
   <h3 class="country__name">${data[0].name}</h3>
  <h4 class="country__region">${data[0].region}</h4>
   <p class="country__row"><span>👫</span>${(
     +data[0].population / 1000000
   ).toFixed(1)} people</p>
  <p class="country__row"><span>🗣️</span>${data[0].languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data[0].currencies[0].name}</p>
</div>
</article>`;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
      return data[0];
    });
};

buton.addEventListener('click', function () {
  const valoare = text.value;
  getCountryData(valoare);
  text.value = '';
});

// const html = ` <article class="country">
// <img class="country__img" src="${data.flag}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} people</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// </div>
// </article>`;

// countriesContainer.insertAdjacentHTML('beforeend', html);
// countriesContainer.style.opacity = 1;

// const lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('you lost'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
