type myResultProps = {

    result: any
}

function ResultCalc(props: myResultProps) {

    let price = 0;
    let score = 0;

    props.result.forEach((item: any) => price += item.price);
    props.result.forEach((item: any) => score += item.score);

    let display = "";
    let info = "";

   if(score >= 5045){
       display = "high-end"
       info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dolor ut lacus dapibus efficitur vitae ut quam. Pellentesque mollis volutpat orci vel egestas."
    }else if(score >= 3500 && score < 5045){
       display = "mid-level"
       info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dolor ut lacus dapibus efficitur vitae ut quam. Pellentesque mollis volutpat orci vel egestas."
   }else{
       display = "low-end"
       info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dolor ut lacus dapibus efficitur vitae ut quam. Pellentesque mollis volutpat orci vel egestas."
   }



    return (
        <>
            <h2 id={"result"}>Result</h2>
            <div className={"edit__card pop-in"}>
                {props.result.map((item: any) => <div style={{display: "flex"}}><p style={{flex: "1"}}>{item.category}</p>
                    <p style={{flex: "1"}}>{item.name}</p></div>)}

            </div>
<div className={"result pop-in"}>
    <h3>Estimated price: {price} €</h3>
    <h3>Score: {score} Points</h3>

    <h3>Classification: {display}</h3>
    <p>{info}</p>
</div>

        </>
    )
}

export default ResultCalc;