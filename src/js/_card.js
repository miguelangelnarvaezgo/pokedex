export class Pokemon {
  constructor (url, elem) {
    this.url = url
    this.elem = elem
  }

  static card = (elem, data) => {
    console.log(elem);
    console.log(data);
  }

  static store = () => {
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
  }

   static paint = async (url, elem) => {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      const poke = {
        id: data.id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgMini: data.sprites.front_default,
        imgSVG: data.sprites.other.dream_world.front_default,
        name: data.name,
        experience: data.base_experience,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        type01: data.types[0].type.name,
        type02: data.types[1].type.name,
      };
      this.card(elem, poke)
    });
  }

}

export class Basic extends Pokemon {
  static card = (elem, data) => {
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.querySelector(elem).insertAdjacentHTML('beforeend',`
        <article>
          <section id="card-basic-img-container-${data.id}" class="card-basic-img-container">
            <img src=${data.img}>
          </section>
          <section id="card-basic-content-container-${data.id}" class="card-basic-content-container">
            <h4>${name}</h4>
            <p><strong>Puntos de vida: ${data.hp}</strong></p>
            <p><strong>Ataque: ${data.attack}</strong></p>
            <p><strong>Defensa: ${data.defense}</strong></p>
          </section>
        </article>
      `)
  }
}


export class Extended extends Pokemon {
  static card = () =>{
    console.log('data');
  }
  static paint = () => {
    console.log('maruhita diaz');
    this.card()
  }
}
