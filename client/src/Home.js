import React, {useState,useEffect } from "react";

function Home(){
    const[topdrinks,setTopDrinks]=useState([])

    useEffect(() => {
        // auto-login
        fetch("/drinks").then((r) => {
          if (r.ok) {
            r.json().then((drinks) => setTopDrinks(drinks));
          }
        });
      }, []);
    
    return(
        <div>
            <div id="myImages">
                <img id="cover"src={require('./media/whiskey.jpg')}/>
            </div>

            <div id="topdrinklist">
                <h1>All Drinks Recorded</h1>
                { topdrinks.map((drink) => <p>{drink.name}</p>)
                }
            </div>
        </div>
    );
}

export default Home;

