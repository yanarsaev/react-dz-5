import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';


function App() {
  const [todos, SetTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      SetTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    SetTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handlerToggle = (id) =>{
    SetTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }

  return (
    <div className='App'>
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>

      {todos.map((todo) => {
        return(
          <ToDo 
          todo={todo} 
          key={todo.id} 
          removeTask={removeTask} 
          handlerToggle={handlerToggle}
          />
        )
      })}
      <ToDoForm addTask={addTask}/>



    </div>
  );
}

export default App;
