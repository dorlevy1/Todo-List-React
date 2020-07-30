import React from 'react'
import TodoList from './container/TodoList'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
      <TodoList />
    </div>
  )
}

export default App
