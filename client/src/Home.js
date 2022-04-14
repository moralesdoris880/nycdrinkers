import React, {useState,useEffect } from "react";
import Drink from "./Drink";

function Home({user}){
    const[topdrinks,setTopDrinks]=useState([])
    
    useEffect(() => {
        fetch("/drinks").then((r) => {
          if (r.ok) {
            r.json().then((drinks) => setTopDrinks(drinks));
          }
        });
      }, []);

    function handleDownArrow(e){
      e.preventDefault();
      var element = document.getElementById("hometitle");
      element.scrollIntoView({behavior: "smooth"});
    }

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
              <span className="material-icons" style={{fontSize: '48px', textAlign: 'center', position: 'relative', left: '45%'}} onClick={handleDownArrow}>keyboard_arrow_down</span>
              <div id="topdrinklist">
                  <h1 id="hometitle">All Drinks</h1>
                  { topdrinks.map((drink) => <Drink drink={drink} user={user}/>)
                  }
              </div>
          </div>
      );
}

export default Home;

