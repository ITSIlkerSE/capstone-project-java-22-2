type myResultProps = {

    result: any
}

function ResultCalc(props: myResultProps) {

    let price = 0;

    props.result.forEach((item: any) => price += item.price);

    return (
        <div>
            <h2>Result</h2>
            {props.result.map((item: any) => <div style={{display: "flex"}}><p style={{flex: "1"}}>{item.category}</p>
                <p style={{flex: "1"}}>{item.name}</p></div>)}
            <h3>Estimated price : {price} €</h3>
        </div>
    )
}

export default ResultCalc;