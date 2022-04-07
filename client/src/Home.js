import React, {useState,useEffect } from "react";
import Drink from "./Drink";

function Home({user}){
    const[topdrinks,setTopDrinks]=useState([])
    console.log(topdrinks)
    useEffect(() => {
        // auto-login
        fetch("/drinks").then((r) => {
          if (r.ok) {
            r.json().then((drinks) => setTopDrinks(drinks));
          }
        });
      }, []);
    
    if(!user)return(
      <div id="myImages">
          <img id="cover"src={require('./media/whiskey.jpg')}>
            
          </img>
      </div>);
    else 
    return(
        <div>
            <div id="myImages">
                <img id="cover"src={require('./media/whiskey.jpg')}/>
            </div>

            <div id="topdrinklist">
                <h1>All Drinks</h1>
                { topdrinks.map((drink) => <Drink drink={drink} user={user}/>)
                }
            </div>
        </div>
    );
}

export default Home;

