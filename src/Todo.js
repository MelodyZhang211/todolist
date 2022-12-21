import React from 'react'

export default function Todo({todo,toggleTodo}) {

  function handleTodoClick(){
    toggleTodo(todo.id)
  }

  return (
    <div>
      <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" checked={todo.complete} onChange={handleTodoClick} value="" id="firstCheckbox"/>
    <label class="form-check-label" for="firstCheckbox">{todo.name}</label>
    </li>
    </div>
  )
}
