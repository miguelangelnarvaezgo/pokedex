// ------------------------------------------ NO ASYNC
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
//   return JSON.parse(localStorage.getItem("data"))
// }

// ------------------------------------------ ASYNC DIRECTO A VARIABLE
export const data = async (url) => {
	const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
    if (typeof(Storage) !== "undefined") {
      return await response.json();
    } else {
      alert('Este navegador no es compatible con PokedexM')
    }
  }
}
