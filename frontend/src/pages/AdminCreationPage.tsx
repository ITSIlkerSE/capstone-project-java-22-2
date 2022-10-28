import {Component} from "../model/Component";
import {ChangeEvent, useState} from "react";

type AddComponentPageProps = {
    components: Component[];
    addComponent: (component: Component) => void;


}


export default function AdminCreationPage(props: AddComponentPageProps) {


    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [combinationCode, setCombinationCode] = useState("")
    const [score, setScore] = useState("")

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const onCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value)
    }
    const onCombinationCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCombinationCode(event.target.value)
    }
    const onScoreChange = (event: ChangeEvent<HTMLInputElement>) => {
        setScore(event.target.value)
    }
    const onAddComponent = () => {
        setName("")
        setCategory("")
        setScore("")
        setCombinationCode("")

        let newComponent = {
            name, category, combinationCode, score
        }

        props.addComponent(newComponent)

    }




        return (

        <div className="layout">

            <p>Graphics card</p>
            <select>
                {props.components.map((component) => <option value={component.id}>{component.name}</option>)}
            </select>
        <form onSubmit={(event) => event.preventDefault()} className={"inputButtons"}>
            <p>Name :</p>
            <input placeholder={"component name"} onChange={onNameChange} value={name}/>

            <p>Category :</p>
            <input placeholder={"component category"} onChange={onCategoryChange} value={category}/>

            <p>CombinationCode :</p>
            <input placeholder={"combination code"} onChange={onCombinationCodeChange} value={combinationCode}/>

            <p>Score :</p>
            <input placeholder={"score points"} onChange={onScoreChange} value={score}/>

            <p></p>
            <button onClick={() => onAddComponent()}>Add Component</button>
        </form>
        </div>

    )


}
