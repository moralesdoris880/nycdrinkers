import React, {useState } from "react";
function Drink({drink}){
    const[star,setStar] = useState(0)
    const[display,setDisplay] = useState(true)
    const x =[1,2,3,4,5]

    function handleRating(e){
        e.preventDefault();
        console.log(star)
        setDisplay(!display)
    }
    function handleChange (e,y) {
        e.preventDefault();
        console.log(y)
        setStar(Number(y))
    }
    return(
        <div style={{display: "flex"}}>
            <img src="https://via.placeholder.com/150"/>
            <div>
                <h1>{drink.name}</h1>
                <p>{drink.ingredients}</p>
                    {x.map(y=> {
                        return(
                        <span className={star<=y-1?"fa fa-star" : "fa fa-star checked"} onClick={(e)=>handleChange(e,y)}/>)
                    })}
                    <button onClick={handleRating} style={{display: display? "block":"none"}}>Rate</button>
                <p>Found at:{drink.restaurant}</p>
            </div>
        </div>
    );
}

export default Drink;

//className={stardesign?"fa fa-star checked":"fa fa-star"}
// className={star<=value?"fa fa-star checked":"fa fa-star"}