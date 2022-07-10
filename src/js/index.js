// import {data} from './_data.js'
// import * as data from './_data.js';
import * as card from './_card.js';



window.onload = function() {
    card.Pokemon.store()
    let listPoke = JSON.parse(localStorage.getItem("data"))

    card.Basic.paint(listPoke[434].url, 'main')
    let basicCard = new card.Basic()
    console.log(basicCard);

};
