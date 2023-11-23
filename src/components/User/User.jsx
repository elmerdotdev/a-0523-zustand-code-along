import { useUserStore } from "./userStore"
import { useCounterStore } from "../Counter/counterStore"

const User = () => {
  const user = useUserStore()
  const counter = useCounterStore()

  return (
    <>
      <h3>Welcome {user.firstname} {user.lastname} is {user.age} years old!</h3>
      <button onClick={() => user.updateFirstname("Joe")}>Change name</button>
      <h3>Count: {counter.count}</h3>
    </>
  )
}

export default User