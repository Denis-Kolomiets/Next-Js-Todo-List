import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from '@/app/Todos/TodoList'
import TodoForm from '@/app/Todos/TodoForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ todosAPI }) {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([...todosAPI])
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (value) {
      const newTodo = {
        text: value,
        id: uuidv4(),
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }
  const toggleDisabled = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      })
    )
  }
  return (
    <>
      <Head>
        <title>Todo List App</title>
      </Head>
      <main className={styles.container}>
        <h1>Todo List Next.js</h1>
        <TodoForm
          onSubmitHandler={onSubmitHandler}
          setValue={setValue}
          value={value}
        />
        <TodoList
          todos={todos}
          deleteTodoHandler={deleteTodoHandler}
          toggleDisabled={toggleDisabled}
        />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/todos')
  const todosAPI = await response.json()

  return {
    props: {
      todosAPI,
    },
    revalidate: 10,
  }
}
