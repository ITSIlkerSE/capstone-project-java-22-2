type myResultProps = {

    result: any
}

function ResultCalc(props: myResultProps) {

    let price = 0;
    let score = 0;

    props.result.forEach((item: any) => price += item.price);
    props.result.forEach((item: any) => score += item.score);



    return (
        <div>
            <h2>Result</h2>
            {props.result.map((item: any) => <div style={{display: "flex"}}><p style={{flex: "1"}}>{item.category}</p>
                <p style={{flex: "1"}}>{item.name}</p></div>)}
            <h3>Estimated price : {price} €</h3>
            <h3>Score : {score} Points</h3>
            <p></p>
        </div>
    )
}

export default ResultCalc;