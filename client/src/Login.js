import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
            } else {
              r.json().then(() => console.log("Try again bub :<"));
            }
          });
    }
    return(
        <div>
            <h1>Log in to NYC Drinkers Society</h1>
            <p>New to NYC Drinkers Society?</p>
            <button><Link to="/signup">Sign Up</Link></button>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" value="Login"></input>
            </form>
            <div>

            </div>
        </div>
    );
}

export default Login;