import React from 'react';
import logo from './logo.svg';
import './App.css';
import useComponent from "./hooks/useComponent";
import AddComponentPage from "./pages/AddComponentPage";

function App() {

    const {addComponent, getAllComponents, getComponentById, components, component} = useComponent();


    return (
        <div className="App">
            <h1>Check&Computify</h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                </p>
            </header>
            <AddComponentPage addComponent={addComponent} component={component}/>
        </div>
    );
}

export default App;
