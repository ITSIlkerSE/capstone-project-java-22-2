import {useEffect, useState} from "react";
import {AdminComponent} from "../model/AdminComponent";
import axios from "axios";

export default function useComponent() {

    const [component, setComponent] = useState("")
    const [components, setComponents] = useState([]);

    useEffect(() => {
        getAllComponents()
    }, [])


    const addComponent = (component: AdminComponent) => {
        axios.post("/api/component", component)
            .then((response) => response.data)
            .then(getAllComponents)
    }

    const getAllComponents = () => {
        axios.get("/api/component")
            .then((response) => response.data)
            .then((component) => setComponents(component))
    }

    const getComponentById = (id: string) => {
        axios.get(`/api/component/${id}`)
            .then((response) => response.data)
    }

    const deleteFunction = (id: string) => {
        axios.delete("/api/component/" + id)
            .then(getAllComponents)
    }

    const editComponent = (id: string, component: AdminComponent) => {
        axios.put(`/api/component/${id}`, component)
            .then(getAllComponents)
            .catch(error => error)
    }

    return {

        addComponent,
        getAllComponents,
        getComponentById,
        deleteFunction,
        editComponent,
        components,
        component,
        setComponent
    }

}

