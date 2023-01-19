import styles from '../../styles/index.module.css'

const TodoForm = ({ onSubmitHandler, value, setValue }) => {
  return (
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
  )
}

export default TodoForm
