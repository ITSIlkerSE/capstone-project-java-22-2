import React, {useEffect, useState} from 'react';
import './App.css';
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
        <p>
          {helloMessage}
        </p>

      </header>
    </div>
  );
}

export default App;
