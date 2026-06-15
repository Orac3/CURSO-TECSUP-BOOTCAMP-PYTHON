import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CrearNota from './pages/CrearNota'
import EditarNota from './pages/EditarNota'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/crear"
        element={<CrearNota />}
      />

      <Route
        path="/editar/:id"
        element={<EditarNota />}
      />
    </Routes>
  )
}

export default App