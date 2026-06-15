import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  // TODO: Agregar un estado "cargando..." para que muestre un mensaje mientras la data está cargando

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    console.log('Me ejecuto solo la primera vez')
    setLoading(true)

    fetchProducts()
      .then(data => setProducts(data.products))
      .finally(() => {
        // Esta función se ejecuta después de la petición de la promesa (si o si)
        setLoading(false)
      })
  }, [])

  return {
    products,
    loading
  }
}