import {useEffect, useState} from "react";
import {Component} from "../model/Component";
import axios from "axios";

export default function useComponent(){

    const [component, setComponent] = useState([]);


    const addComponent = (component: Component) => {
        axios.post("/api/admin", component)
            .then((response) => response.data)
            .then((component) => setComponent(component))
    }

    return {addComponent, component}


}

