// OBJETIVO: Consultar información en formato JSON desde un servicio web y su URL

const url = 'https://jsonplaceholder.typicode.com/posts'

console.log(fetch(url)) // Promise {<pending>} -> Devuelve una promesa (Promise)

// Estados de una promesa -> pending, fulfilled(OK) y rejected (Falló)

// fetch(url)
//   .then(response => response.json()) // Se ejecuta cuando la respuesta llegó correctamente y además convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//     console.log(data[0])
//     console.log(data[0].title)
//   })

// TODO: Renderizar la lista de posts del servicio jsonplaceholder con sus campos título, id y body

const renderPosts = (posts = []) => {
  const divApp = document.querySelector('#app')

  let postsList = ''

  posts.forEach(post => {
    postsList += `<h2>${post.id} - ${post.title}</h2>`
  })

  divApp.innerHTML = postsList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderPosts(data)
  })
  .catch(error => {
    // Sirve para controlar errores inesperados
    console.log(error)
  })

// TODO: Renderizar la lista de todos del servicio jsonplaceholder con su titulo, id
// URL: https://jsonplaceholder.typicode.com/todos