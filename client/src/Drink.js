import React, {useState, useEffect } from "react";
function Drink({drink, user}){
    const[star,setStar] = useState(0)
    const[comment,setComment] = useState("")
    const[display,setDisplay] = useState(true)
    const[displayrating,setDisplayRating] = useState(true)
    const x =[1,2,3,4,5]
    const[ratings,setRatings] = useState(0)
    const[displayavg,setDisplayAvg]= useState(true)

    useEffect(() => {
        // auto-login
        fetch("/ratings").then((r) => {
          if (r.ok) {
            r.json().then((drink_ratings) => {
                checkRatings(drink_ratings)
                handleAverageRating(drink_ratings,drink)
              } );
          }
        });
      }, [display]);

    function handleRating(e){
        e.preventDefault();
        console.log(star)
        fetch("/ratings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              comment: comment,
              drink_rating: star,
              user_id: user.id,
              drink_id: drink.id
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => {
                setDisplay(!display)
                });
            } else {
              r.json().then(() => console.log("Rating not created :<"));
            }
          });
    }

    function handleChange (e,y) {
        e.preventDefault();
        setStar(Number(y))
    }

    function checkRatings(drink_ratings){
        let answer = drink_ratings.some((rating)=> drink.id === rating.drink.id)
        return setDisplayRating(!answer)
    }

    function handleAverageRating(drink_ratings,drink){
        let average = drink_ratings.filter((rating) => rating.drink.id === drink.id)
        let div = average.length
        let sum = average.reduce((pre,curr)=>pre+curr.drink_rating,0)
        console.log(sum/div)
        if (isNaN(sum/div)) {
          setDisplayAvg(false)
          return 'Not a Number!';
        }
        else{
        return setRatings(sum/div)
        }
      }
    
    return(
        <div style={{display: "flex"}}>
            <img src="https://via.placeholder.com/150"/>
            <div>
                <h1>{drink.name}</h1>
                <span style={{display: displayavg? "block":"none"}} className="fa fa-star checked"></span>
                <p style={{display: displayavg? "block":"none"}}>{ratings}/5</p>
                <p>{drink.ingredients}</p>
                <div id="rating_form" style={{display: displayrating? "block":"none"}}>
                    {x.map(y=> {
                        return(
                        <span className={star<=y-1?"fa fa-star" : "fa fa-star checked"} onClick={(e)=>handleChange(e,y)} style={{display: display? "block":"none"}}/>)
                    })}
                    <input type="text" placeholder="Comment here" onChange={(e) => setComment(e.target.value)} style={{display: display? "block":"none"}}></input>
                    <button onClick={handleRating} style={{display: display? "block":"none"}}>Rate</button>
                </div>
                <div>
                </div>
                <p>Found at: {drink.restaurant.name}</p>
            </div>
        </div>
    );
}

export default Drink;

//className={stardesign?"fa fa-star checked":"fa fa-star"}
// className={star<=value?"fa fa-star checked":"fa fa-star"}