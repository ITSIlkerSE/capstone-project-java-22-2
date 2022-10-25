import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import useComponent from "./hooks/useComponent";
import AddComponentPage from "./pages/AddComponentPage";

function App() {

  const {addComponent} = useComponent();

  const [helloMessage, setHelloMessage] = useState("")

  function fetchHelloMessage(){
    axios.get("/api/admin")
        .then(response => response.data)
        .then(data => setHelloMessage(data))
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchHelloMessage()
  }, [])



  return (
    <div className="App">
      <h1>Check&Computify</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>{helloMessage}</h1>
        </p>
      </header>
      <AddComponentPage addComponent={addComponent} component={{
        id: undefined,
        name: '',
        category: '',
        combinationCode: '',
        score: ''
      }}/>
    </div>
  );
}

export default App;
