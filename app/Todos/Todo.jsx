import styles from '../../styles/index.module.css'
import { RiDeleteBin2Line } from 'react-icons/ri'
const Todo = ({ todo, deleteTodoHandler }) => {
  return (
    <li className={styles.todo} key={todo.id}>
      {todo.text}
      <RiDeleteBin2Line onClick={() => deleteTodoHandler(todo.id)} />
    </li>
  )
}

export default Todo
