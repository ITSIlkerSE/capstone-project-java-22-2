import {useState} from "react";
import {Component} from "../model/Component";
import axios from "axios";

export default function useComponent(){

    const [components, setComponents] = useState([]);


    const addComponent = (component: Component) => {
        axios.post("/api/admin", component)
            .then((response) => response.data)
            .then((component) => setComponents(component))
    }

    const getAllComponents = () => {
        axios.get("/api/admin")
            .then((response) => response.data)
            .then((components) => setComponents(components))
    }

    const getComponentById = (id: string) => {
        axios.get(`/api/admin/${id}`)
            .then((response) => response.data)
    }



    return {addComponent, getAllComponents, getComponentById, components}


}

