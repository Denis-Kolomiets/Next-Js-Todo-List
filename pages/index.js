import { useState } from 'react'
import styles from './index.module.css'
import { v4 as uuidv4 } from 'uuid'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
const Index = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  console.log(todos)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const newTodo = {
      text: value,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
    setValue('')
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }
  return (
    <div className={styles.container}>
      <h1>Todo List NextJs</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <li className={styles.todo} key={todo.id}>
                {todo.text}
                <RiDeleteBin2Line onClick={() => deleteTodoHandler(todo.id)} />
              </li>
            )
          })
        ) : (
          <div>Todo list empty</div>
        )}
      </ul>
    </div>
  )
}

export default Index
