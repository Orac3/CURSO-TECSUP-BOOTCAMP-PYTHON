import { useNavigate } from 'react-router-dom'

import NotaForm from '../components/NotaForm'

import {
  obtenerNotas,
  guardarNotas
} from '../services/notasService'

const CrearNota = () => {

  const navigate = useNavigate()

  const crearNota = (data) => {

    const notas =
      obtenerNotas()

    const nuevaNota = {
      id: Date.now(),
      ...data
    }

    notas.push(nuevaNota)

    guardarNotas(notas)

    navigate('/')
  }

  return (
    <div className="p-5">

      <h1 className="text-2xl mb-5">
        Crear Nota
      </h1>

      <NotaForm
        onSubmit={crearNota}
      />

    </div>
  )
}

export default CrearNota