import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import NotaCard from '../components/NotaCard'

import {
  obtenerNotas,
  guardarNotas
} from '../services/notasService'

const Home = () => {

  const [notas, setNotas] = useState([])

  const [loading, setLoading] =
    useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    const cargarNotas = async () => {

      await new Promise(resolve =>
        setTimeout(resolve, 1000)
      )

      setNotas(obtenerNotas())

      setLoading(false)
    }

    cargarNotas()

  }, [])

  const eliminarNota = (id) => {

    const confirmar = window.confirm(
      '¿Eliminar nota?'
    )

    if (!confirmar) return

    const nuevasNotas =
      notas.filter(
        nota => nota.id !== id
      )

    setNotas(nuevasNotas)

    guardarNotas(nuevasNotas)
  }

  const editarNota = (id) => {
    navigate(`/editar/${id}`)
  }

  if (loading) {
    return (
      <h2 className="p-5">
        Cargando...
      </h2>
    )
  }

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">
        Cursos y Notas
      </h1>

      <button
        onClick={() => navigate('/crear')}
        className="bg-green-500 text-white px-4 py-2 rounded mb-5"
      >
        Nueva Nota
      </button>

      {
        notas.map(nota => (
          <NotaCard
            key={nota.id}
            nota={nota}
            onEliminar={eliminarNota}
            onEditar={editarNota}
          />
        ))
      }

    </div>
  )
}

export default Home