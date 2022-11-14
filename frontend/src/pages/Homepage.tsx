import React from "react";
import {NavLink} from "react-router-dom";


export default function Homepage() {




    return(

        <div className="content">
            <h3>Homepage</h3>
            <NavLink to={"/user/ComputifyPcPage"}><button>check-in computify</button></NavLink>
            <NavLink to={"/user/CheckPcPage"}><button>Pc check</button></NavLink>
        </div>


    )





}