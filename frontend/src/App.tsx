import './App.css';
import {HashRouter} from "react-router-dom";
import React from "react";
import Root from "./Root";


export default function App() {



    return (
        <div className="container">



            <HashRouter>

                <Root/>

            </HashRouter>


        </div>
    );
}
