// TODO: Devolver todas las películas del enpoint http://localhost:3000

const API_URL = 'http://localhost:3000/movies'

const fetchMovies = async () => {
  const response = await fetch(API_URL) // Esperar l respuesta del servidor (asincrona)

  return await response.json() // Esperara a la conversionde JSON a Objeto JS (asincrona)
}

const deleteMovie = async (id) => {
  // http://localhost:3000/movies/id

  const url = `${API_URL}/${id}`

  // ??? configuracion de fetch (DELETE)
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options) // Por defecto fetch usa el método GET

  return await response.json()
}

const createMovie = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form) // El body siempre tiene que ser una cadena de texto
  }

  return await fetch(API_URL, options)
}

// TODO: Renderizar las peliculas usando la plantilla del tbody

const renderMovies = (movies = []) => {
  const elMovieList = document.querySelector('.movies__list')

  let html = ''

  movies.forEach(movie => {
    html += `
    <tr>
      <td>${movie.id}</td>
      <td>
        <img src="${movie.image}" alt="" width="100" height="150">
      </td>
      <td>
        <strong>${movie.name}</strong>
        <div>
          <strong>Estreno:</strong> ${movie.release}
        </div>
        <div>
          <strong>Resumen:</strong> ${movie.summary}
        </div>
      </td>
      <td>
        <div>
          <button>✏</button>
          <button class="movies__remove" data-id="${movie.id}">❌</button>
        </div>
      </td>
    </tr>
    `
  })

  elMovieList.innerHTML = html

  // TODO: remover una película cuando presionamos el boton ❌

  const removeButtons = document.querySelectorAll('.movies__remove')

  // console.log(removeButtons)

  removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      // 1. Extraer el id de la película a eliminar
      const id = event.target.dataset.id
    
      console.log('Eliminando pelicula', id)

      // 2. Eliminar la pelicula en el servidor

      const confirmDelete = confirm('¿Estás seguro de eliminar esta película?') // Devuelve un boolean

      if (confirmDelete) {
        await deleteMovie(id)

        // 3. Actualizar la lista de películas

        const movies = await fetchMovies()

        renderMovies(movies)
      }
    })
  })
}

const elMoviesForm = document.querySelector('#moviesForm')

elMoviesForm.addEventListener('submit', async (event) => {
  event.preventDefault() // Evita que el formulario actualice la página

  console.log('Guardando la película')

  // 1. Extraer los datos del formulario

  const peliculasForm = document.forms['moviesForm']

  const name = peliculasForm.name.value
  const image = peliculasForm.image.value
  const release = peliculasForm.release.value
  const summary = peliculasForm.summary.value

  console.log(name, image, release, summary)

  // 2. Crear la película en el servidor

  const newMovie = {
    name,
    image,
    release,
    summary
  }

  try {
    const response = await createMovie(newMovie)

    if (!response.ok){
      console.log('La película no se guardó correctamente')
      return
    }

    console.log('La película se guardó correctamente')
  } catch (error) {
    console.log(error)
  }

  // 3. Actualizar la lista de películas

  const movies = await fetchMovies()

  renderMovies(movies)

  // 4. Limpiamos el formulario

  peliculasForm.reset()
})

fetchMovies()
  .then(data => {
    renderMovies(data)
  })