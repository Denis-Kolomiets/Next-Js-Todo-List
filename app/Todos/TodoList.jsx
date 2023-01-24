import styles from '@/styles/index.module.css'
import Todo from './Todo'
const TodoList = ({ todos, deleteTodoHandler, toggleDisabled }) => {
  return (
    <ul className={styles.ul}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <Todo
              toggleDisabled={toggleDisabled}
              key={todo.id}
              todo={todo}
              deleteTodoHandler={deleteTodoHandler}
            />
          )
        })
      ) : (
        <div>Todo list empty</div>
      )}
    </ul>
  )
}

export default TodoList
