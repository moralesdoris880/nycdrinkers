import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)
    
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
              r.json().then((user) => handleLoginSuccess(user));
            } else {
              r.json().then(() => console.log("Try again bub :<"));
            }
          });
    }

    function handleLoginSuccess(user){
      setUser(user)
      setDisplay1(false)
      setDisplay2(true)
    }

    return(
        <div>
          <div style={{display: display1? "block":"none"}}>
            <h1>Log in to NYC Drinkers Society</h1>
            <p>New to NYC Drinkers Society?</p>
            <button><Link to="/signup">Sign Up</Link></button>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" value="Login"></input>
            </form>
          </div>
          <div style={{display: display2? "block":"none"}}>
              <h1>Login Successful!</h1>
              <p>Welcome back {username} to the exclusive NYC Drinkers Society!</p>
              <iframe src="https://giphy.com/embed/QsDeBGiPiGTbY2Fau1" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thegoodplace-nbc-the-good-place-tgp-QsDeBGiPiGTbY2Fau1">via GIPHY</a></p>
              <button><Link to="/">Return Home</Link></button>
          </div>
        </div>
    );
}

export default Login;