import {useEffect, useState} from "react";
import {AdminComponent} from "../model/AdminComponent";
import axios from "axios";

export default function useComponent() {

    const [component, setComponent] = useState("")
    const [components, setComponents] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        getAllComponents()


    }, [])


    function setAdmin(){

        isAdmin ? setIsAdmin(false) : setIsAdmin(true)

    }


    function handleLogin(username: string, password: string) {
        axios.get("api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .catch(() => alert("Das Passwort war falsch!"))
    }

    function handleRegister(username: string, password: string) {
        axios.post("api/user/register", {username, password})
            .then(response => response.data)
    }

    function handleLogout() {
        axios.get("api/user/logout")
    }


    const addComponent = (component: AdminComponent) => {
        axios.post("/api/admin", component)
            .then((response) => response.data)
            .then(getAllComponents)
    }

    const getAllComponents = () => {
        axios.get("/api/admin")
            .then((response) => response.data)
            .then((component) => setComponents(component))
    }

    const getComponentById = (id: string) => {
        axios.get(`/api/admin/${id}`)
            .then((response) => response.data)
    }

    const deleteFunction = (id: String) => {
        axios.delete("/api/admin/" + id)
            .then(getAllComponents)
    }
    const editComponent = (id: string, component: AdminComponent) => {
        axios.put(`/api/admin/${id}`, component)
            .then(getAllComponents)
            .catch(error => error)
    }

    return {
        addComponent,
        getAllComponents,
        getComponentById,
        handleLogin,
        handleRegister,
        handleLogout,
        deleteFunction,
        editComponent,
        setAdmin,
        components,
        component,
        isAdmin
    }


}

