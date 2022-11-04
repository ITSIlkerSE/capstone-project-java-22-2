import {AdminComponent} from "../model/AdminComponent";
import React, {ChangeEvent, useState} from "react";
import './AdminCreationPage.css';

type AddComponentPageProps = {
    components: AdminComponent[];
    addComponent: (component: AdminComponent) => void;
    deleteComponent: (component: string) => void;

}

export default function AdminCreationPage(props: AddComponentPageProps) {


    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [combinationCode, setCombinationCode] = useState("")
    const [score, setScore] = useState("")
    const [price, setPrice] = useState("")
    const [classification, setClassification] = useState("")

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
    const onPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }
    const onClassificationChange = (event: ChangeEvent<HTMLInputElement>) => {
        setClassification(event.target.value)
    }

    const onAddComponent = () => {
        setName("")
        setCategory("")
        setScore("")
        setCombinationCode("")
        setPrice("")
        setClassification("")

        let newComponent = {
            name, category, combinationCode, score, price, classification
        }

        props.addComponent(newComponent)

    }

    const mainboardFilter = props.components.filter((component) => (component.category === "Mainboard"))

    const cpuFilter = props.components.filter((component) => (component.category === "CPU"))

    const cpuCoolerFilter = props.components.filter((component) => (component.category === "CPU cooler"))

    const graphicCardsFilter = props.components.filter((component) => (component.category === "Graphics card"))

    const ramFilter = props.components.filter((component) => (component.category === "RAM"))

    const hardDiskFilter = props.components.filter((component) => (component.category === "Hard disk"))

    const soundcardFilter = props.components.filter((component) => (component.category === "Sound card"))

    const powerAdapterFilter = props.components.filter((component) => (component.category === "Power adapter"))

    const towerFilter = props.components.filter((component) => (component.category === "Tower"))


    return (

        <div className="layout-dropdowns">

            <p>All components</p>
            <form>
                <select onChange={


                    (event) => {
                        setId(event.target.value);
                    }

                }>
                    {props.components.map((component) =>
                        <option key={component.id} value={component.id}>{component.name}</option>)}

                </select>


                <button onClick={() => props.deleteComponent(id)}>Delete</button>
                <button>Details</button>

                <p>Mainboards</p>
                <select>
                    {mainboardFilter.map((component) => <option key={component.id}
                                                                value={component.id}>{component.name}</option>)}
                </select>

                <p>CPU's</p>
                <select>
                    {cpuFilter.map((component) => <option key={component.id}
                                                          value={component.id}>{component.name}</option>)}
                </select>

                <p>CPU coolers</p>
                <select>
                    {cpuCoolerFilter.map((component) => <option key={component.id}
                                                                value={component.id}>{component.name}</option>)}
                </select>

                <p>Graphics cards</p>
                <select>
                    {graphicCardsFilter.map((component) => <option key={component.id}
                                                                   value={component.id}>{component.name}</option>)}
                </select>

                <p>RAM's</p>
                <select>
                    {ramFilter.map((component) => <option key={component.id}
                                                          value={component.id}>{component.name}</option>)}
                </select>

                <p>Hard disks</p>
                <select>
                    {hardDiskFilter.map((component) => <option key={component.id}
                                                               value={component.id}>{component.name}</option>)}
                </select>

                <p>Soundcards</p>
                <select>
                    {soundcardFilter.map((component) => <option key={component.id} value={component.id}>{component.name}</option>)}
                </select>

                <p>Power adapters</p>
                <select>
                    {powerAdapterFilter.map((component) => <option key={component.id}
                                                                   value={component.id}>{component.name}</option>)}
                </select>

                <p>Towers</p>
                <select>
                    {towerFilter.map((component) => <option key={component.id}
                                                            value={component.id}>{component.name}</option>)}
                </select>
            </form>


            <h1>Post new component</h1>

            <form onSubmit={(event) => event.preventDefault()} className={"inputButtons"}>
                <p>Name :</p>
                <input placeholder={"type in..."} onChange={onNameChange} value={name}/>

                <p>Category :</p>
                <input placeholder={"type in..."} onChange={onCategoryChange} value={category}/>

                <p>Classification :</p>
                <input placeholder={"type in..."} onChange={onClassificationChange} value={classification}/>

                <p>Price :</p>
                <input placeholder={"type in..."} onChange={onPriceChange} value={price}/>

                <p>CombinationCode :</p>
                <input placeholder={"type in..."} onChange={onCombinationCodeChange} value={combinationCode}/>

                <p>Score :</p>
                <input placeholder={"type in..."} onChange={onScoreChange} value={score}/>

                <button onClick={() => onAddComponent()}>Add Component</button>


            </form>
        </div>

    )


}

