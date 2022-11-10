import {useEffect, useState} from "react";
import {AdminComponent} from "../model/AdminComponent";
import axios from "axios";
import {LoginReturn} from "../model/LoginReturn";

export default function useComponent() {

    const [component, setComponent] = useState("")
    const [components, setComponents] = useState([]);
    const [me, setMe] = useState("")
    const [role, setRole] = useState("")

    useEffect(() => {
        getAllComponents()
    }, [])

    async function handleLogin(username: string, password: string) {
      await axios.get("api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .then((data: LoginReturn) => {
                setMe(data.username);
                setRole(data.roles[0])
            })
            .catch(() => alert("Das Passwort war falsch!"))
    }

    function handleRegister(username: string, password: string, emailAddress: string) {
        axios.post("api/user/register", {username, password, emailAddress})
            .then(response => response.data)
    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(""))
    }

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
        handleLogin,
        handleRegister,
        handleLogout,
        deleteFunction,
        editComponent,
        components,
        component,
        setComponent,
        setMe,
        me,
        role
    }

}

