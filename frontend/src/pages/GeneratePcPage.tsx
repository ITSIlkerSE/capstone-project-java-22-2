import React, {useState} from "react";
import {AdminComponent} from "../model/AdminComponent";

type GeneratePcPageProps = {

    components: AdminComponent[];

}

export default function GeneratePcPage(props: GeneratePcPageProps) {


    const [id, setId] = useState("")

    return(



        <div className="content">


            <select onChange={


                (event) => {
                    setId(event.target.value);
                }

            }>
                {props.components.map((component) =>
                    <option key={component.id} value={component.id}>{component.name}</option>)}

            </select>

            <h3>GeneratePcPage</h3>
            <button>generate pc</button>
        </div>


    )





}


/*



 */