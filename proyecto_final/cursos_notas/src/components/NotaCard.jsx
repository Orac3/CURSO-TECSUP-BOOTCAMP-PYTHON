const NotaCard = ({
  nota,
  onEliminar,
  onEditar
}) => {
  return (
    <div className="border p-4 rounded mb-3">

      <h3 className="font-bold">
        {nota.curso}
      </h3>

      <p>
        Nota: {nota.nota}
      </p>

      <div className="mt-2 flex gap-2">

        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => onEditar(nota.id)}
        >
          Editar
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onEliminar(nota.id)}
        >
          Eliminar
        </button>

      </div>

    </div>
  )
}

export default NotaCard