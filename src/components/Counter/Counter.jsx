import { useEffect } from "react"
import { useCounterStore } from "./counterStore"

const Counter = () => {
  const counter = useCounterStore()

  useEffect(() => {
    counter.fetchTodos()
  }, [])

  return (
    <div>
      <h1>Count: {counter.count}</h1>
      <h2>Name: {counter.name} is {counter.age} years old</h2>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
      <button onClick={() => counter.incrementByAmount(20)}>Add 20</button>

      <input type="text" value={counter.name} onChange={(event) => counter.updateName(event.target.value)} />

      <h2>Todos</h2>
      <ul>
        {counter.todos.map(todoItem => (
          <li key={todoItem.id}>{todoItem.todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Counter