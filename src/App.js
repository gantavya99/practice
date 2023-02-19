import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
function App() {
  const [json,setJson]=useState([]);
  const [counter,setCounter]=useState(0);
 
 
  const fetchData=()=>{
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = axios.get(url).then((response)=>{
      setJson(response.data);
      console.log(response.data)
    }) 
  }
  useEffect(()=>{
    fetchData();
    
  },[]);
  setTimeout(()=>{
    if(counter==5)
    setCounter(0);
    else
    setCounter(()=>counter+1)
  },1000)

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      
      {json.map(user=>(
        <h2>
          {user.name}
        </h2>
      ))}
      
    </div>
  );
}

export default App;


//fetch the data and after 10 seconds re render it . 