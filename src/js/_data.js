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
  return JSON.parse(localStorage.getItem("data"))
}

export const pokemon = async (url) => {
  await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}



// export const list = async () => {
//   await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (typeof(Storage) !== "undefined") {
//       localStorage.setItem("data", JSON.stringify(data.results));
//     } else {
//       alert('Este navegador no es compatible con PokedexM')
//     }
//   })
//   return JSON.parse(localStorage.getItem("data"))
// }


// ------------------------------------------ ASYNC EN localStorage (devuelve Promise pendig con respuesta resolved)
// export const data = async (url) => {
//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (typeof(Storage) !== "undefined") {
//       localStorage.setItem("data", JSON.stringify(data));
//     } else {
//       alert('Este navegador no es compatible con PokedexM')
//     }
//   })
// 	return JSON.parse(localStorage.getItem("data"))
// }

// ------------------------------------------ ASYNC directo a variable con try catch (devuelve Promise pendig con respuesta resolved)
// export const getData = async (url) => {
//   try {
// 		const response = await fetch(url, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			}
// 		})
// 		const data = await response.json()
// 		return data
// 	} catch (error) {
// 			throw new Error(`HTTP error! status: ${response.status}`);
// 			alert('Error de conexión con el servidor, intentalo de nuevo pasados uno minutos. Diculpa las molestias.')
// 	}
// }

// ------------------------------------------ ASYNC DIRECTO A VARIABLE con response.ok (devuelve Promise pendig con respuesta resolved)
//
// export const data = async (url) => {
// 	const response = await fetch(url, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			}
// 		}
// 	);
// 	if (response.ok) {
// 		// console.log(response.status);
// 		return await response.json();
// 	} else {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 		alert('Error de conexión con el servidor, intentalo de nuevo pasados uno minutos. Diculpa las molestias.')
//   }
// }

// // ------------------------------------------  ASYNC a variable (como debería ser, pero devuelve Promise vacía)
// export const data = async (url) => {
//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     return data
//     console.log(data.results);
//   })
// }


// export const lola = async (url) => {
//   await fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));
//
// }

// // ------------------------------------------  NO FUNCIONA
// function data(url){
//     return fetch(url,
//     {
//     	method: "GET",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       return data;
//     })
//     .catch(error => console.warn(error));
//   }
