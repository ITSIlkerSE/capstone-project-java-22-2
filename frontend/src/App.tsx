import React from 'react';
import logo from './logo.svg';
import './App.css';
import useComponent from "./hooks/useComponent";
import AdminCreationPage from "./pages/AdminCreationPage";

function App() {

    const {addComponent, getAllComponents, getComponentById, component} = useComponent();


    return (
        <div className="App">
            <h1>Check&Computify</h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <AdminCreationPage addComponent={addComponent} component={component}/>
        </div>
    );
}

export default App;
