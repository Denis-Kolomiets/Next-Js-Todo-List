import styles from '../../styles/index.module.css'
import { RiDeleteBin2Line } from 'react-icons/ri'
const Todo = ({ todo, deleteTodoHandler, toggleDisabled }) => {
  return (
    <li className={styles.todo} key={todo.id}>
      <label className={styles.check}>
        <input type="checkbox" />
        <span
          className={styles.checkmark}
          onClick={() => toggleDisabled(todo.id)}
        ></span>
      </label>
      {todo.text}
      <button
        disabled={!todo.completed}
        className={styles.btn_del}
        onClick={() => deleteTodoHandler(todo.id)}
      >
        <RiDeleteBin2Line />
      </button>
    </li>
  )
}

export default Todo
