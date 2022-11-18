import React, {useState} from "react";
import {AdminComponent} from "../model/AdminComponent";

type CheckComponentsPage = {
    components: AdminComponent[];
}


export default function CheckComponentsPage(props: CheckComponentsPage) {


    const [selectedComponent, setSelectedComponent] = useState("")
    const [allComponents] = useState(props.components);
    const [filter, setFilter] = useState("");


    function handleInput(event:any){

        setFilter(event.target.value)
        console.log(filter)
    }

    const filterSelect = allComponents.filter((component) =>component.name.toLowerCase().includes(filter.toLowerCase())

    )

    return (

        <div className="content check">
            <h2>Check components</h2>
            <input placeholder={"search components..."} type={"text"} name={"filter"} onChange={handleInput}/>
            <select
                onChange={(event) => {

                    const myObject: any = props.components.find((component) => event.target.value === component.id)

                    if (myObject) {
                        setSelectedComponent(myObject.name)

                    }
                }}>
                <option defaultValue="" disabled selected>Select your option</option>
                {filterSelect.map((component) =>
                    <option key={component.id} value={component.id}>{component.name}</option>)}

            </select>

            <a href={`https://google.com/search?q=${selectedComponent}`} target={"_blank"} rel="noreferrer">
                <button>Search on google</button>
            </a>
            <a href={`https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${selectedComponent}`}
               target={"_blank"} rel="noreferrer">
                <button>Search on idealo</button>
            </a>

        </div>


    )


}