import React, {useState} from "react";
import {AdminComponent} from "../model/AdminComponent";

type GeneratePcPageProps = {

    components: AdminComponent[];

}

export default function GeneratePcPage(props: GeneratePcPageProps) {


    const [id, setId] = useState("")

    const mainboardFilter = props.components.filter((component) => (component.category === "Mainboard"))

    const cpuFilter = props.components.filter((component) => (component.category === "CPU"))

    const cpuCoolerFilter = props.components.filter((component) => (component.category === "CPU cooler"))

    const graphicCardsFilter = props.components.filter((component) => (component.category === "Graphics card"))

    const ramFilter = props.components.filter((component) => (component.category === "RAM"))

    const hardDiskFilter = props.components.filter((component) => (component.category === "Hard disk"))

    const soundcardFilter = props.components.filter((component) => (component.category === "Sound card"))

    const powerAdapterFilter = props.components.filter((component) => (component.category === "Power adapter"))

    const towerFilter = props.components.filter((component) => (component.category === "Tower"))

    return(



        <div className="content">

            <div className="admin__row">
                <p>Components list</p>

                <select onChange={


                    (event) => {
                        setId(event.target.value);
                    }

                }>
                    {props.components.map((component) =>
                        <option key={component.id} value={component.id}>{component.name}</option>)}

                </select>


            </div>




            <div className={"admin__row"}>
                <p>Choose your mainboard :</p>
                <select>
                    {mainboardFilter.map((component) => <option key={component.id}
                                                                value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>
            </div>

            <div className={"admin__row"}>

                <p>CPU's</p>
                <select>
                    {cpuFilter.map((component) => <option key={component.id}
                                                          value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>

            </div>

            <div className={"admin__row"}>

                <p>CPU coolers</p>
                <select>
                    {cpuCoolerFilter.map((component) => <option key={component.id}
                                                                value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>

            </div>


            <div className={"admin__row"}>

                <p>Graphics cards</p>
                <select>
                    {graphicCardsFilter.map((component) => <option key={component.id}
                                                                   value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>

            </div>


            <div className={"admin__row"}>

                <p>RAM's</p>
                <select>
                    {ramFilter.map((component) => <option key={component.id}
                                                          value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>

            </div>


            <div className="admin__row">


                <p>Hard disks</p>
                <select>
                    {hardDiskFilter.map((component) => <option key={component.id}
                                                               value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>
            </div>


            <div className="admin__row">


                <p>Soundcards</p>
                <select>
                    {soundcardFilter.map((component) => <option key={component.id}
                                                                value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>
            </div>

            <div className="admin__row">

                <p>Power adapters</p>
                <select>
                    {powerAdapterFilter.map((component) => <option key={component.id}
                                                                   value={component.id}>{component.name}</option>)}
                </select>

                <button>Add component</button>
            </div>


            <div className="admin__row">

                <p>Towers</p>
                <select>
                    {towerFilter.map((component) => <option key={component.id}
                                                            value={component.id}>{component.name}</option>)}
                </select>
                <button>Add component</button>

            </div>

            <h3>Computify</h3>
            <button>Add Component</button>
        </div>


    )





}


/*



 */