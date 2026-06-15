import { useState } from 'react'

const NotaForm = ({
  onSubmit,
  notaInicial
}) => {

  const [curso, setCurso] = useState(
    notaInicial?.curso || ''
  )

  const [nota, setNota] = useState(
    notaInicial?.nota || ''
  )

  const manejarSubmit = (e) => {
    e.preventDefault()

    onSubmit({
      curso,
      nota
    })
  }

  return (
    <form
      onSubmit={manejarSubmit}
      className="flex flex-col gap-3"
    >

      <input
        type="text"
        placeholder="Curso"
        value={curso}
        onChange={(e) =>
          setCurso(e.target.value)
        }
        className="border p-2"
      />

      <input
        type="number"
        placeholder="Nota"
        value={nota}
        onChange={(e) =>
          setNota(e.target.value)
        }
        className="border p-2"
      />

      <button
        className="bg-green-500 text-white p-2 rounded"
      >
        Guardar
      </button>

    </form>
  )
}

export default NotaForm