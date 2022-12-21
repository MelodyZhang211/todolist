import TodoList from './TodoList'
import React, { useState ,useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodo)
  },[])


  useEffect(()=>{
    let storedTodo = JSON.stringify(todos)
    console.log(storedTodo)
    localStorage.setItem(LOCAL_STORAGE_KEY,storedTodo)
  },[todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === "") return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4() , name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }

  function handleKeyPress(target) {
    if(target.charCode===13){
      handleAddTodo()   
    } 
  }
  return (
    <div>
    <div class="alert alert-info" role="alert">{todos.filter(todo=> !todo.complete).length} left to do</div>
    <input ref={todoNameRef} type="text" class="form-control form-control-lg" placeholder="enter your todo" ></input>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <div class="d-grid gap-2 d-md-block">
    <button type="button" class="btn btn-warning" onClick={handleAddTodo}  >Add Todo</button>
    <button ype="button" class="btn btn-outline-info" onClick={handleClearTodos} >Clear Completed Todos</button>
    </div>
    </div>
  )
}

export default App;
