import "./App.css"
import TodoList from "./components/TodoList";
import { useState, useEffect} from "react";
import {db} from './firebase';
// import { collection, getDocs } from '.firebase/firestore'

function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, 'users')
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data); 

  //   }



  // }, [])
  return (
    
    <div className="App">
   
      <div>
      <TodoList />
      </div>

     
    </div>
  );
}

export default App;
