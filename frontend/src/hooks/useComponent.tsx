import {useEffect, useState} from "react";
import {Component} from "../model/Component";
import axios from "axios";

export default function useComponent() {

    const [welcomeMessage, setWelcomeMessage] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [me, setMe] = useState("")

    let component!: Component;

    const [components, setComponents] = useState([]);

    useEffect(() => {
        getAllComponents()

    }, [])

    function fetchWelcomeMessage() {
        axios.get("/api/welcome")
            .then(response => {
                return response.data
            })
            .then(data => setWelcomeMessage(data))

    }

    function handleLogin() {
        axios.get("api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .then((data) => setMe(data))
            .then(() => setUsername(""))
            .then(() => setPassword(""))
            .catch(() => alert("Das Passwort war falsch!"))
    }

    function handleRegister() {
        axios.post("api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(response => response.data)
            .then((data) => setMe(data))
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(""))
    }


    const addComponent = (component: Component) => {
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
    const editComponent = (id: string, component: Component) => {
        axios.put(`/api/admin/${id}`, component)
            .then(getAllComponents)
            .catch(error => error)
    }


    return {
        addComponent,
        getAllComponents,
        getComponentById,
        fetchWelcomeMessage,
        handleLogin,
        handleRegister,
        handleLogout,
        deleteFunction,
        components
    }


}

