import React, {useState} from 'react';
import './index.css';

function ToDo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
    
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleAddTodo = () => {
    if(value !== '') {
      setTodos([...todos, {id: Math.floor(Math.random() * 100000000), description: value}]);
      setValue('');
    }
  }

  const handleDeleteTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const todoEl = todos.map(({description, id}) => {
    return (
      <li className='Todo-item' key={id} onDoubleClick={() => handleDeleteTodo(id)}>{description}</li>
    )
  })

  return (
    <div className="Todo">
      <h1 className='title'>Todo App</h1>
      <div className='todo-form'>
      <input className="Todo-input" type="text" value={value} onChange={handleChange}/>
      <button className="Todo-btn" onClick={handleAddTodo}>add</button>
      </div>
      <ul className='todo-list'>
        {todoEl}
      </ul>
    </div>
  )
}

export default ToDo;
