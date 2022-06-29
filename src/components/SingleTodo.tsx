import React from 'react'
import { Todo } from '../model';
import './styles.css';

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos} : Props) => {
  return (
    <form className='todos__single'>
      <span className="todos__single-text">{todo.todo}</span>
      <div>
        <span className="icon">edit</span>
        <span className="icon">del</span>
        <span className="icon">done</span>
      </div>
      
    </form>
  )
}

export default SingleTodo;