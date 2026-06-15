import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import PruebaPage from './pages/PruebaPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import LayoutBase from './layouts/LayoutBase.jsx'
import LayoutProducts from './layouts/LayoutProducts.jsx'

// TODO: Listar los personajes de la siguiente url https://rickandmortyapi.com/api/character

// TODO: Añadir un template para las rutas 'products' y el detalle de los productos.

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutBase />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/prueba' element={<PruebaPage />} />
      </Route>

      <Route element={<LayoutProducts />}>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)