import React from 'react';
import './App.css';
import useComponent from "./hooks/useComponent";
import AdminCreationPage from "./pages/AdminCreationPage";

function App() {

    const {addComponent, getAllComponents, getComponentById, components} = useComponent();


    return (
        <div className="App">
            <h1>Hey Admin! Welcome to Check&Computify</h1>
            <AdminCreationPage addComponent={addComponent} components={components}/>
        </div>
    );
}

export default App;
