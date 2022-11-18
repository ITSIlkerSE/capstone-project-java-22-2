import React from "react";
import {NavLink} from "react-router-dom";


export default function Homepage() {




    return(

        <div className="content home">
            <h2>Homepage</h2>
            <NavLink to={"/user/GenerateSetupPage"}><button>Generate a setup</button></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>


            <p>Let the app generate your desired Setup!</p>
            <NavLink to={"/user/CheckComponentsPage"}><button>Check Components</button></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <p>Wanna check single components? Click here!</p>
            <NavLink to={"/user/SetupCheckerPage"}><button>Check a setup</button></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <p>Is the offer a good deal? Check here! </p>
            <NavLink to={"/user/ComputifyPcPage"}><button>Computify</button></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <p>Make your fully customizable and synergized own setup easily! </p>
        </div>


    )





}