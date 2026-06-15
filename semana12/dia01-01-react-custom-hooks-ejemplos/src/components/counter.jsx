import { useCounter } from "../hooks/useCounter"

// DEPUÉS DE USAR CUSTOM HOOKS
const Counter = () => {
  const { count, decrement, increment } = useCounter()

  return (
    <div>
      <h3>Counter</h3>

      <div>
        <button onClick={decrement}>-</button>
        <strong>{count}</strong>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter

// ANTES DE USAR CUSTOM HOOKS USANDO USESTATE
// const Counter = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h3>Counter</h3>

//       <div>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <strong>{count}</strong>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

// export default Counter