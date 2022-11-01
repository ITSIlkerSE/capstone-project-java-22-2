import React from 'react';
import './App.css';
import useComponent from "./hooks/useComponent";
import AdminCreationPage from "./pages/AdminCreationPage";

function App() {

    const {addComponent, components, deleteFunction} = useComponent();


    return (
        <div className="App">
            <h1>Hey Admin!</h1>
            <h3> Welcome to Check&Computify </h3>
            <AdminCreationPage addComponent={addComponent} components={components} deleteComponent={deleteFunction}/>
        </div>
    );
}

export default App;
