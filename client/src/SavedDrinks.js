import { useState, useEffect } from "react";
import RatingCard from "./RatingCard";

function SavedDrinks(){
    const[drinkRatings,setDrinkRatings]= useState([]);

    useEffect(() => {
        fetch("/user_ratings").then((r) => {
          if (r.ok) {
            r.json().then((ratings) => 
            setDrinkRatings(ratings));
          }
        });
      }, []);

    return(
        <div>
            <h1 id="ratingtitle">My Drinks</h1>
            <div id="ratingcontainer">
                {
                    drinkRatings.map((rating)=> <RatingCard rating={rating} setDrinkRatings={setDrinkRatings} drinkRatings={drinkRatings}/>)
                }
            </div>
        </div>
    );
}

export default SavedDrinks;