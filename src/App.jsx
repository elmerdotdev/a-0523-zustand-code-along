import { useCounterStore } from "./components/Counter/counterStore"

import Counter from "./components/Counter/Counter"

const App = () => {
  const counter = useCounterStore()

  return (
    <div>
      <h1>{counter.name}</h1>
      <Counter />
    </div>
  )
}

export default App