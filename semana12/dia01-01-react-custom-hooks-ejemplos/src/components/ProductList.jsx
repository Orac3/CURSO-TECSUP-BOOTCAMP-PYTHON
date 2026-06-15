// TODO: Listar los productos de la siguiente rest api: https://dummyjson.com/products. Usando un useState, useEffect.

import { useProducts } from "../hooks/useProducts"

const ProductList = () => {
  const { products, loading } = useProducts()

  // Renderizado condicional
  if(loading) {
    return (
      <div>
        Cargando productos...
      </div>
    )
  }

  return (
    <div>
      <h2>Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}

export default ProductList