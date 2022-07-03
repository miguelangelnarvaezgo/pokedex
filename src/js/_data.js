// // ------------------------------------------ NO ASYNC a localStorage
// export const data = (url) => {
//   fetch(url, {
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
//   return JSON.parse(localStorage.getItem("data"))
// }


// ------------------------------------------ ASYNC EN localStorage
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


export const getData = async (url, id) => {
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(id, JSON.stringify(data));
    } else {
      alert('Este navegador no es compatible con PokedexM')
    }
  })
}

// export const parse = (id) => {
// 	return JSON.parse(localStorage.getItem(id);
// }

// ------------------------------------------ ASYNC directo a variable con try catch
// export const data = async (url) => {
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

// ------------------------------------------ ASYNC DIRECTO A VARIABLE con response.ok
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
// 		console.log(response.status);
// 		return await response.json();
// 	} else {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 		alert('Error de conexión con el servidor, intentalo de nuevo pasados uno minutos. Diculpa las molestias.')
//   }
// }
