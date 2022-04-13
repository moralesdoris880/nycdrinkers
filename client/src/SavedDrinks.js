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

    function handleUpdate(data){
        setDrinkRatings(drinkRatings.map(rating => rating.id === data.id ? data : rating))
    }

    function handleFilter(data){
        setDrinkRatings(drinkRatings.filter(rating => rating.id !== data.id));   
    }

    return(
        <div>
            <h1>My Drinks</h1>
            <div>
                {
                    drinkRatings.map((rating)=> <RatingCard rating={rating} handleFilter={handleFilter} handleUpdate={handleUpdate}/>)
                }
            </div>
        </div>
    );
}

export default SavedDrinks;