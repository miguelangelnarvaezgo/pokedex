// import * as card from './_card.js';
// // ------------------------------------------ NO ASYNC a localStorage (devuele el objeto OK!)
export const list = () => {
   fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("data", JSON.stringify(data.results));
    } else {
      alert('Este navegador no es compatible con PokedexM')
    }
  })
  // return JSON.parse(localStorage.getItem("data"))
}

// export const pokemon = async (url) => {
//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     const pokemon = {
//       id: data.id,
//       img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
//       imgMini: data.sprites.front_default,
//       imgSVG: data.sprites.other.dream_world.front_default,
//       name: data.name,
//       experience: data.base_experience,
//       hp: data.stats[0].base_stat,
//       attack: data.stats[1].base_stat,
//       defense: data.stats[2].base_stat,
//       specialAttack: data.stats[3].base_stat,
//       specialDefense: data.stats[4].base_stat,
//       speed: data.stats[5].base_stat,
//       type01: data.types[0].type.name,
//       type02: data.types[1].type.name,
//     };
//     // console.log(pokemon);
//     card.basic('main', pokemon)
//   })
// }
