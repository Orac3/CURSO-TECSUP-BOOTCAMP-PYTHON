# Asincronía

### Asincronía en Javascript

JS no espera a que algo lento termine sino que continua su ejecución y espera que se termine en un segundo plano

```js
console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 2000ms')
}, 2000) // 2000ms <> 2 seg

console.log('Fin de mi programa')
```

## API

Una API es un mensajero que lleva pedidos(peticiones) y trae respuestas.

Nuestras aplaciones web, no va directo a una base datos.
Nuestra aplicación web siempre habla con una API.

Ejemplo: Cliente -> Mesero (API) -> Cocina (BACKEND o BASE DE DATOS)

## HTTP + Verbos HTTP

HTTP -> Es un protocolo de comunicación (Hypertext Transfer Protocol)

HTTP es el lenguage que las aplicaciones web usan para comunicarse

Ejemplos:
http://127.0.0.1:5500
http://localhost:5500
https://youtube.com

## Verbos HTTP

GET         -> Obtener datos (Lectura)
POST        -> Crear datos
PUT         -> Actualizar datos
PATCH       -> Actualizar datos pero de una más atómica
DELETE      -> Eliminar datos

## Formato JSON (JavaScript Object Notation)

Formato javascript con un  objeto válido

```js
{
  nombre: 'Victor',
  edad: 39,
}
```

Este mismo formato en JSON:

```js
{
  "nombre": "Victor",
  "edad": 39
  "encendido": true,
  "favoritos": [],
  "notas": {}
}
```

En JS:

```js
JSON.stringify({ name: 'Alonso' }) // Convertimos a una cadena de texto con el formato JSON
JSON.parse('{"name":"Alonso"}') // Convertimos una cadena de texto con el formato JSON a un objeto JS
```

## STATUS CODE

https://http.cat/

200        -> Todo OK
201        -> Recurso creado (POST)
400        -> Error del cliente
401        -> No autenticado
403        -> Sin permisos
404        -> El recurso no existe
500        -> Error del servidor