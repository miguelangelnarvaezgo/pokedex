// import {data} from './_data.js'
import * as data from './_data.js';



window.onload = function() {
   listPoke = data.list()
   console.log(listPoke);

   data.pokemon(listPoke[0].url)
};
