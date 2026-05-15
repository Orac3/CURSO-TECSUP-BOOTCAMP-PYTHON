const LIMIT = 6

let page = 1
let count = 0

let pokemonFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []
console.log(pokemonFavorites)

// DONE: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async (page = 1) => {
  page = Math.max(page, 1)
  const OFFSET = (page - 1) * LIMIT

  // const API_URL = `https://pokeapi.co/api/v2/pokemon'
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Devuelve una promesa

  // TODO: Agregar el id a cada pokemon dentro del arreglo results para usarlo en la imagen del pokemon

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    const foundFavorite = pokemonFavorites.find(favorite => favorite.id === id)

    return {
      ...pokemon,
      id,
      image,
      isFavorite: Boolean(foundFavorite), // CAST -> CONVERTIMOS UN TIPO DE DATO A OTRO: objeto a boolean
    }
  })

  return {
    ...data,
    results: dataResults
  }
}

// DONE: 02 - Crear una función que nos permita renderizar(imprimir) los pokemons en la página
const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  // DONE: Necesitamos renderizar el nombre del pokemon en una etiqueta article en el elemento section con id pokemonList

  // DONE: Necesitamos agrega una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>${pokemon.id}.- ${pokemon.name}</h2>
        <img src="${pokemon.image}" width="80" height="80" />
        <div>
          <button
            onclick="toggleFavorite('${pokemon.id}', '${pokemon.name}', '${pokemon.image}')"
          >
            <img src='images/icon-star${pokemon.isFavorite ? '-filled' : ''}.svg' />
          </button>
          <button
            onclick="readPokemon('${pokemon.id}')"
            class='${pokemon.isFavorite ? '' : 'is-hidden'}'
          >
            <img src="images/icon-edit.svg" />
          </button>
        </div>
      </article>
    `
  })

  pokemonList.innerHTML = elements

  const totalPages = Math.ceil(count / LIMIT)

  document.querySelector('#currentPage').textContent = `${page} de ${totalPages}`
}

const readPokemon = (pokemonId) => {
  console.log(pokemonId)
}

const toggleFavorite = async (id, name, image) => {
  const foundPokemonFavorite = pokemonFavorites.filter(
    favorite => favorite.id === id
  )

  const existPokemonFavorite = foundPokemonFavorite.length > 0

  if (existPokemonFavorite) {
    // Retiramos el Pokemon de favoritos
    pokemonFavorites = pokemonFavorites.filter(
      pokemon => pokemon.id !== id
    )
  } else {
    // Agregamos el pokemon a favoritos
    pokemonFavorites.push({ id, name, image })
  }

    localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

  console.log(pokemonFavorites)

  const data = await fetchPokemons(page)

  renderPokemons(data.results)
}

// DONE: Implementar los botones: anterior, primero y último.

const nextPageButton = document.querySelector('#nextPage')
const prevPageButton = document.querySelector('#prevPage')
const firstPageButton = document.querySelector('#firstPage')
const lastPageButton = document.querySelector('#lastPage')

nextPageButton.addEventListener('click', async () => {
  console.log('Next click')
  page = Math.min(page + 1, 225)
  const dataPokemons = await fetchPokemons(page)
  console.log(dataPokemons)
  renderPokemons(dataPokemons.results)
})

prevPageButton.addEventListener('click', async () => {
  console.log('Prev click')
  page = Math.max(page - 1, 1)
  const dataPokemons = await fetchPokemons(page)
  console.log(dataPokemons)
  renderPokemons(dataPokemons.results)
})

firstPageButton.addEventListener('click', async () => {
  console.log('firstpage click')
  page = 1
  const dataPokemons = await fetchPokemons(page)
  console.log(dataPokemons)
  renderPokemons(dataPokemons.results)
})

lastPageButton.addEventListener('click', async () => {
  console.log('lastPage click')
  page = 150
  // page = 225
  const dataPokemons = await fetchPokemons(page)
  console.log(dataPokemons)
  renderPokemons(dataPokemons.results)
})

fetchPokemons() // Devuelve una promesa por eso necesita el .then
  .then(data => {
    console.log(data)

    count = data.count

    renderPokemons(data.results)
  })