import React from 'react';
import logo from './logo.svg';
import './App.css';
import useComponent from "./hooks/useComponent";
import AddComponentPage from "./pages/AddComponentPage";

function App() {

    const {addComponent, getAllComponents, getComponentById, components} = useComponent();


    return (
        <div className="App">
            <h1>Check&Computify</h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
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
