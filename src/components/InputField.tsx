import React, { useRef } from 'react'
import './styles.css';

interface InputFieldProps {
  todo: string;
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="" className='input' onSubmit={
      (e) => {
        handleAdd(e) 
        inputRef.current?.blur()
      }
      
      } >
      <input type="input" className='input__box' name="" id="" placeholder='Enter a Task' value={todo} 
      onChange={
        (e) => setTodo(e.target.value)
      }
      ref={inputRef}
      />
      <button className='input_submit' type='submit'>GO</button>
    </form>
  )
}

export default InputField