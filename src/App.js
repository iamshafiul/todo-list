import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
 
  const [inputText, setInputText] = useState("");
  const [toDos,setToDos] = useState([]);
  const [status,setStatus] = useState("All");
  const [filteredToDos,setFilteredToDos] = useState([]);
  useEffect(()=>{
    filterHandler();
  },[toDos,status]);

  const filterHandler =()=>{
    switch(status){
      case "completed":
        setFilteredToDos(toDos.filter(toDo =>toDo.completed === true));
        break;
      case "uncompleted":
      setFilteredToDos(toDos.filter(toDo =>toDo.completed === false));
      break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }

  return (
    <div className="main_div">
      <h1 className="text-center mt-5">Todo List</h1>
      <Form setStatus={setStatus} inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}></Form>
      <ToDoList filteredToDos={filteredToDos} setToDos={setToDos} toDos={toDos}></ToDoList>
    </div>
  );
}

export default App;
