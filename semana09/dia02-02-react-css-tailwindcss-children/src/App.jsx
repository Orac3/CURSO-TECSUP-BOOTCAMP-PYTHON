import './Card.css'

// Children significa: contenido hijo dentro del componente

function Card({ children }) {
  return (
    <div className="card" style={{ backgroundColor: 'yellow', padding: '4px' }}>
      <h1 className="title">Hola React!</h1>

      <p className="description">
        {children ?? 'Estoy aprendiendo estilos en React'}
      </p>

      <button className="button">
        OK
      </button>
    </div>
  )
}

function CardConTailwindCSS() {
  return (
    <div className='bg-orange-500 w-[300px] mt-4 p-4 flex flex-col gap-4'>
      <h1 className='text-xl font-bold mb-2 text-center'>Hola CardConTailwindCSS!</h1>

      <p className='text-center'>
        Estoy aprendiendo estilos en React
      </p>

      <button className='w-full bg-blue-500 p-2'>
        OK
      </button>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Card>
        Hola desde la prop children
      </Card>

      <CardConTailwindCSS />
    </>
  )
}

export default App