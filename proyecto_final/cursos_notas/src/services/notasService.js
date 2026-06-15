const STORAGE_KEY = 'notas'

export const obtenerNotas = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || []
}

export const guardarNotas = (notas) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notas)
  )
}