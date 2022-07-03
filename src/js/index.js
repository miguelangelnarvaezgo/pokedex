// import {data} from './_data.js'
import * as data from './_data.js';



window.onload = function() {
  data.getData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000', 'index')
  let nomenclator = JSON.parse(localStorage.getItem("index"));

  data.getData(nomenclator.results[0].url, String(nomenclator.results[0].name))

  // let poke01 = data.parse(String(nomenclator.results[0].name));
  let poke01 = JSON.parse(localStorage.getItem(nomenclator.results[0].name));
  console.log(nomenclator.results.length);
  console.log(poke01);
};
