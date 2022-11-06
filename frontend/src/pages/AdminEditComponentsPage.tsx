import React, {useState} from 'react';
import {AdminComponent} from "../model/AdminComponent";
import Product from "../components/Product";

type AdminEditComponentsPageProps = {
    editComponent: (id: string, component: AdminComponent) => void;
    components: AdminComponent[];
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

        const updateComponent: AdminComponent = {
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


    }
    const selectProduct = props.components.filter((component) => id === component.id);
    const displaySelectProduct = selectProduct.map((product) => <Product key={product.id} name={product.name} category={product.category}
                                                                         price={product.price}
                                                                         combinationCode={product.combinationCode}
                                                                         score={product.score}
                                                                         classification={product.classification}/>)


    return (
        <div className="content">
            <h2>Edit</h2>
            <form>

                <select onChange={(event) => {
                    setId(event.target.value)
                }}>
                    {props.components.map((component) => <option key={component.id} value={component.id}>{component.name}</option>)}
                </select>

                <input value={name} placeholder="Name" onChange={(event) => setName(event.target.value)}/>
                <input value={category} placeholder="Category" onChange={(event) => setCategory(event.target.value)}/>
                <input value={combinationCode} placeholder="Combination code" onChange={(event) => setCombinationCode(event.target.value)}/>
                <input  value={score} placeholder="Score" onChange={(event) => setScore(event.target.value)}/>
                <input  value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)}/>
                <input value={classification} placeholder="Classification" onChange={(event) => setClassification(event.target.value)}/>
                <button onClick={() => {onUpdateComponent()

                }}>Edit</button>
            </form>

            <div>

                {displaySelectProduct}


            </div>

        </div>
    )
}
