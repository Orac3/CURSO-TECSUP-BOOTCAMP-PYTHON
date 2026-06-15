import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import NotaForm from '../components/NotaForm'

import {
  obtenerNotas,
  guardarNotas
} from '../services/notasService'

const EditarNota = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const notas =
    obtenerNotas()

  const nota =
    notas.find(
      nota => nota.id === Number(id)
    )

  const actualizarNota = (data) => {

    const nuevasNotas =
      notas.map(nota => {

        if (nota.id === Number(id)) {

          return {
            ...nota,
            ...data
          }

        }

        return nota

      })

    guardarNotas(
      nuevasNotas
    )

    navigate('/')
  }

  return (
    <div className="p-5">

      <h1 className="text-2xl mb-5">
        Editar Nota
      </h1>

      <NotaForm
        notaInicial={nota}
        onSubmit={actualizarNota}
      />

    </div>
  )
}

export default EditarNota