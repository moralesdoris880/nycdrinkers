import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import React, { useState } from "react";

function NavBar({user, setUser, setSearchAnswers}){
    const[icon,setIcon]=useState("menu");
    const[click,setClick]= useState(true);
    const[display,setDisplay]= useState(false);

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
            setDisplay(true);
        }
        else if(click===true){
            setIcon("menu");
            setDisplay(false);
        }
    }

    if (!user) {
        return(
        <div className="navbar">
            <Link to="/" style={{ textDecoration: 'none' ,color: 'white'}}><h1 className="logo">NYC Drinkers Society</h1></Link>
            <button>
            <Link to="/login">Login</Link>
            </button>
            <button><Link to="/signup">Sign Up</Link></button>
        </div>
    )}
    else{
        return(
            <div className="navbar">
                <Link to="/" style={{ textDecoration: 'none' ,color: 'white'}}><h1 className="logo" >NYC Drinkers Society</h1></Link>
                <Button setSearchAnswers={setSearchAnswers}/>
                <span className="material-icons md-48" onClick={handleMenu} id="burger-nav">{icon}</span>
                <div id="mininavbar" style={{display: display? "flex":"none"}}>
                    <NavLink to="/" exact style={{ textDecoration: 'none', color: 'white'}} >HOME</NavLink>
                    <NavLink to="/saved" exact className="saved" style={{ textDecoration: 'none', color: 'white'}}>MY RATINGS</NavLink>
                    <button onClick={handleLogout} id="logout">LOGOUT</button>
                </div>
            </div>
        )
    }
}

export default NavBar;