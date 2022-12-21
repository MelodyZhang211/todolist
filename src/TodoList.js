import React from 'react'
import Todo from './Todo'
export default function TodoList({todos,toggleTodo}) {
  return (
      todos.map(todo=> { 
        return <ul class="list-group">
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          </ul>
      })
  )
}
