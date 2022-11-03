import React, {FormEvent, useState} from 'react';
import {Component} from "../model/Component";

type AdminEditComponentsPageProps = {
    editComponent: (id: string, component: Component) => void;
    components: Component[];
}

export default function AdminEditComponentsPage(props: AdminEditComponentsPageProps) {


    const [component, setComponent] = useState("")
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [combinationCode, setCombinationCode] = useState("")
    const [score, setScore] = useState("")
    const [price, setPrice] = useState("")
    const [classification, setClassification] = useState("")

    const onUpdateComponent = () => {
        setName("")
        setCategory("")
        setScore("")
        setCombinationCode("")
        setPrice("")
        setClassification("")

        const updateComponent: Component = {
            id,
            name,
            category,
            combinationCode,
            score,
            price,
            classification
        }

        setComponent(component);

        props.editComponent(id, updateComponent);
        console.log("updated", updateComponent);
    }

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <select onChange={(event) => setId(event.target.value)}>
                    {props.components.map((component) =>
                        <option value={component.id}>{component.name}</option>)}
                </select>

                <input onChange={(event) => setName(event.target.value)}/>
                <input onChange={(event) => setCategory(event.target.value)}/>
                <input onChange={(event) => setCombinationCode(event.target.value)}/>
                <input onChange={(event) => setScore(event.target.value)}/>
                <input onChange={(event) => setPrice(event.target.value)}/>
                <input onChange={(event) => setClassification(event.target.value)}/>
                <button onClick={() => onUpdateComponent()}>Edit</button>
            </form>
        </div>
    )
}
