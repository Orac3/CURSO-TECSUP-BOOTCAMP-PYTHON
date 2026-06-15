// ESM (ECMAScript Modules)
// Es una forma moderna de importar archivos, exportar archivos, compartir códifo entre archivos
// Gracias a esto podemos dividir el proyecto en partes pequeñas y organzadas.

import frutas from './modules.js' // Estamos trayendo la constante frutas desde otro archivo

console.log(frutas) // (3) ['manzanas', 'plátanos', 'peras']

import { curso as MiCurso, PI } from './modules.js'

console.log(MiCurso) // {name: 'Algoritmos', nota: 20}
console.log(PI)


// 01 - Componente base usando function

function App() {
  return <h1>Bienvenidos a React.js!</h1>
}

export default App

// Qué es un componente?
// * Es una función, devuelve JSX, todo componente en su nombre empieza con mayúscula.

// Partes de un componente:
// 1. Imports (Si los hay)
// 2. Lógica (variables, hooks, functions)
// 3. Return -> JSX
// 4. Export ( Nos sirve para crear un módulo)

// Reglas básicas de un componente
// * UN solo elemento padre
// * Es recomendable que la función tenga el mismo nombre del archivo. Ej. App.jsx -> App

// 02 - Componente base usando arrow functions

// const App = () => {
//   return <h1>Bienvenidos a React.js!</h1>
// }

// export default App

// 03 - Componente usando múltiples líneas

// const App = () => {
//   return (
//     <section>
//       <h1>Hola React.js!</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </section>
//   )
// }

// export default App

// 03.1 - Componente usando Fragments (<></>)

// const App = () => {
//   return (
//     <>
//       <h1>Hola React.js!</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </>
//   )
// }

// export default App

// 04. Extensiones de VSCODE pra usar con React.js
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// Snippets para crear components (rfc, rafce)

// snippet: rfc

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 05 - Anidar componentes dentro de otros

// function ComponenteSaludo() {
//   return (
//     <h4>Hola a todos!</h4>
//   )
// }

// function ComponenteDespedida() {
//   return (
//     <h4>Adios a todos!</h4>
//   )
// }

// const App = () => {
//   return (
//     <section>
//       <h3>Componentes anidados</h3>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// export default App

// 6 - Importando componentes externos

// import { ComponenteSaludo } from './components/ComponenteSaludo.jsx'

// // TODO: Llevar el componente ComponenteDespedida a su propio archivo e importarlo aquí mismo

// function ComponenteDespedida() {
//   return (
//     <h4>Adios a todos!</h4>
//   )
// }

// const App = () => {
//   return (
//     <section>
//       <h3>Componentes anidados</h3>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// export default App

// 07 - Usando expresiones con jsx -> "{}"

// import { LISTA_DE_FRUTAS, EDAD, curso } from './components/frutas.js'

// const App = () => {
//   // Lógica
//   const suma = 8 + 9
//   const nombre = 'Victor'

//   // Comentarios en React.js van dentro del cuerpo de la función
//   /* Otro comentario multilínea dentro el cuerpo de la función */

//   return (
//     <section>
//       <h1>Usando expresiones con jsx</h1>

//       <p>{suma}</p>
//       <p>{nombre}</p>
//       <p>{1 + 2 * 9 ** 2}</p>

//       <p>{`Hola ${nombre}`}</p>
//       <p>Hola {nombre}</p>

//       {/* Comentario en React.js dentro del JSX */}

//       <p>{LISTA_DE_FRUTAS}</p>
//       <p>{EDAD}</p>
//       <p>{JSON.stringify(curso)}</p>
//       <p>{curso.nombre}</p>
//       <p>{curso.nota}</p>
//     </section>
//   )
// }

// export default App

// 08 - Propiedades de un componente (Ahora el componente será reutilizable)

// const BievenidaPersonalizada = (props) => {
//   return <h3>Hola {props.nombre}, tu edad es {props.edad ?? '0'} años</h3>
// }

// const App = () => {
//   return (
//     <div>
//       <h4>Propiedades de un componente</h4>

//       <BievenidaPersonalizada nombre="Keyth" edad="26" />
//       <BievenidaPersonalizada nombre="Victor" edad="40" />
//       <BievenidaPersonalizada nombre="Herson" />
//     </div>
//   )
// }

// export default App

// 09 - Propiedades de un componente (Con destructuring)

// const BievenidaPersonalizada = ({ nombre, edad, color }) => {
//   return <h3>Hola {nombre}, tu edad es {edad ?? '0'} años, y tu color favorito es {color}</h3>
// }

// const App = () => {
//   return (
//     <div>
//       <h4>Propiedades de un componente</h4>

//       <BievenidaPersonalizada nombre="Keyth" edad="26" color="amarillo" />
//       <BievenidaPersonalizada nombre="Victor" edad="40" />
//       <BievenidaPersonalizada nombre="Herson" />
//     </div>
//   )
// }

// export default App