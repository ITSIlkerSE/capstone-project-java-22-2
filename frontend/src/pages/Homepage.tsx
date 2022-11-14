import React from "react";
import {NavLink} from "react-router-dom";


export default function Homepage() {




    return(

        <div className="content">
            <h3>Homepage</h3>
            <NavLink to={"/user/ComputifyPcPage"}><button>Computify</button></NavLink>
            <NavLink to={"/user/CheckPcPage"}><button>Check Components</button></NavLink>
        </div>


    )





}