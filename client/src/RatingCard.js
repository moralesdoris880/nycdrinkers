import { useState } from "react";

function RatingCard({rating, handleFilter, handleUpdate}){
    const[rate,setRate]= useState(0)
    const[comment,setComment]= useState("")
    const[display,setDisplay]= useState(true)

    function handlePatch(e,id){
        e.preventDefault();
        fetch(`ratings/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "comment": comment,
                "drink_rating": rate
            })
        })
        .then(response => response.json())
        .then(data => handleUpdate(data))
    }

    function handleDelete(e,id){
        e.preventDefault();
        fetch(`ratings/${id}`,{method: 'DELETE'})
            .then(response => response.json())
            .then(data =>handleFilter(data))
    }

    return(
        <div>
            <div>
                <h1>{rating.drink.name}</h1>
                <p>{rating.drink_rating}</p>
                <p>{rating.comment}</p>
            </div>
            <div>
                <input type="number" placeholder="Rating" onChange={(e) => setRate(e.target.value)} />
                <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)}/>
                <input type="submit" value="Done"  onClick={(e)=>handlePatch(e,rating.id)} ></input>
            </div>
            <button >Edit</button>
            <button onClick={(e)=>handleDelete(e,rating.id)}>Delete</button>
        </div>
    );
}

export default RatingCard;