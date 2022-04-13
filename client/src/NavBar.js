import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import React, { useState } from "react";

function NavBar({user, setUser, setSearchAnswers}){
    const[icon,setIcon]=useState("menu");
    const[click,setClick]= useState(true);

    function handleLogout(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }

    function handleMenu(){
        setClick(!click)
        if(click===false){
            setIcon("close");
        }
        else if(click===true){
            setIcon("menu");
        }
    }

    if (!user) {
        return(
        <div style={{display: 'flex'}}>
            <Link to="/"><h1>NYC Drinkers Society</h1></Link>
            <button>
            <Link to="/login">Login</Link>
            </button>
            <button><Link to="/signup">Sign Up</Link></button>
        </div>
    )}
    else{
        return(
            <div style={{display: 'flex'}}>
                <Link to="/"><h1>NYC Drinkers Society</h1></Link>
                <div>
                <Button setSearchAnswers={setSearchAnswers}/>
            </div>
            <span className="material-icons md-48" onClick={handleMenu}>{icon}</span>
            <div id="navbar">
                <NavLink to="/" exact >Home</NavLink>
                <NavLink to="/saved" exact className="saved">My Ratings</NavLink>
                <button onClick={handleLogout}>Logout</button>
            </div>
            </div>
        )
    }
}

export default NavBar;