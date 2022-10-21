import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {log} from "util";
import axios from "axios";

function App() {

  const [helloMessage, setHelloMessage] = useState("")

  function fetchHelloMessage(){
    axios.get("/api/hello")
        .then(response => response.data)
        .then(data => setHelloMessage(data))
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchHelloMessage()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {helloMessage}
        </p>

      </header>
    </div>
  );
}

export default App;
