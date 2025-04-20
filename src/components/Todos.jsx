import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'
function Todos() {
    let todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    &nbsp;
    {todos.map((todo) =>
    <li key={todo.id}>
        {todo.text} &nbsp;
         <button onClick={()=> dispatch(removeTodo(todo.id)) }className="rounded-r-lg px-3 py-1 bg-red-600 text-white shrink-0">Delete</button>  
    </li>
    )}
    </>
  )
}

export default Todos