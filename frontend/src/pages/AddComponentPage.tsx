import {Component} from "../model/Component";
import {ChangeEvent, FormEvent, useState} from "react";

type AddComponentPageProps = {
    component: Component;
    addComponent: (component: Component) => void;

}

    export default function AddComponentPage(props: AddComponentPageProps) {

    const [component, setComponent] = useState(props.component)
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

        let newComponent = {
            name, category, combinationCode, score
        }

        props.addComponent(newComponent)
    }



    return (
        <div className={"inputButtons"}>
            <p>Name :</p>
            <input placeholder={"type in component name"} onChange={onNameChange} value={name}/>

            <p>Category :</p>
            <input placeholder={"type in component category"} onChange={onCategoryChange} value={category}/>

            <p>CombinationCode :</p>
            <input placeholder={"type in combinationCode"} onChange={onCombinationCodeChange} value={combinationCode}/>

            <p>Score :</p>
            <input placeholder={"type in score points"} onChange={onScoreChange} value={score}/>

            <p> </p>
            <button onClick={() => onAddComponent()}>Add Component</button>
        </div>

    )


}
