import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";


function Button({setSearchAnswers}){
    const[query, setQuery]= useState("")
    const[searchFound, setSearchFound]= useState(false)
    const[drinks,setDrinks]= useState([])
    const[restaurants,setRestaurants]= useState([])

    useEffect(() => {
        fetch("/drinks").then((r) => {
          if (r.ok) {
            r.json().then((drinks) => setDrinks(drinks));
          }
        });
      }, []);
    
    useEffect(() => {
        fetch("/restaurants").then((r) => {
          if (r.ok) {
            r.json().then((restaurants) => setRestaurants(restaurants));
          }
        }); //to be implemented
    }, []);

    function handleSearch(e){
        e.preventDefault();
        const newdrinks = drinks.filter((drink)=> drink.name.includes(query))
        setSearchAnswers(newdrinks)
        setSearchFound(true)
    }

    return(
        <div>
        <form onSubmit={handleSearch} id="search">
            <input id="searchbar" placeholder="Find drinks... " onChange={(e)=>setQuery(e.target.value)}></input>
            <input id="searchsubmit" type="submit" value="Search"></input>
        </form>
        {searchFound? <Redirect to="/search" /> : null}
        </div>
    );
}

export default Button;