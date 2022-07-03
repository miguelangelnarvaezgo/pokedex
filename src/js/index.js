import {data} from './_data.js'
// import * as data from './_data.js';




// element.addEventListener('DOMContentLoaded', function() {
//   data()
//   let lolo = JSON.parse(localStorage.getItem("data"));
//   console.log(lolo);
// })

window.onload = function() {
  // data()
  // let lolo = JSON.parse(localStorage.getItem("data"));
  let lolo = data('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000')
  console.log(lolo);
};
