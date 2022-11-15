import React, {useState} from "react";
import {AdminComponent} from "../model/AdminComponent";

type CheckPcPageProps = {
    components: AdminComponent[];
}


export default function CheckPcPage(props: CheckPcPageProps) {


    const [selectedComponent, setSelectedComponent] = useState("")

    return (

        <div className="content">

            <p>Components list</p>

            <select
                onChange={(event) => {

                    const myObject: any = props.components.find((component) => event.target.value === component.id)

                    if (myObject) {
                        setSelectedComponent(myObject.name)

                    }
                }}>
                <option defaultValue="" disabled selected>Select your option</option>
                {props.components.map((component) =>
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