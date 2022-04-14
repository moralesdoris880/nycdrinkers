import { useState } from "react";

function RatingCard({rating, handleFilter, handleUpdate}){
    const[rate,setRate]= useState(0);
    const[comment,setComment]= useState("");
    const[display,setDisplay]= useState(false);
    const[complete, setComplete]= useState(false);

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

    function handleEdit(e){
        e.preventDefault();
        setDisplay(!display);
    }

    return(
        <div className="ratingcard">
            <img src="https://via.placeholder.com/150"/>
            <div className="ratingcontent">
                <div className="ratingcardtop">
                    <h1>{rating.drink.name}</h1>    
                </div>
                <div className="ratingcardmid">
                <p>My Rating: <span className="fa fa-star checked"></span> {rating.drink_rating}</p>
                </div>
                <p style={{paddingBottom: "5px", paddingTop: "10px"}}>Comment: {rating.comment}</p>
            <div style={{display: display? "block": "none"}}>
                <input type="number" placeholder="Rating" onChange={(e) => setRate(e.target.value)} />
                <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)}/>
                <input type="submit" value="Done"  onClick={(e)=>handlePatch(e,rating.id)} ></input>
            </div>
            <button onClick={handleEdit}>{display? "Close": "Edit"}</button>
            <button onClick={(e)=>handleDelete(e,rating.id)}>Delete</button>
            </div>
        </div>
    );
}

export default RatingCard;