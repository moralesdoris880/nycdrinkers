import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)

    function handleSignup(e){
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => handleSignUpSuccess(user));
            } else {
              r.json().then(() => console.log("Not created :<"));
            }
          });
    }

    function handleSignUpSuccess(user){
        setUser(user);
        setDisplay2(true);
        setDisplay1(false);
    }

    return(
        <div>
          <div className="login" style={{display: display1? "block":"none"}}>
            <h1>Sign Up for NYC Drinkers Society</h1>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="loginsignupinput" style={{marginTop: '10px'}}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="loginsignupinput" style={{marginTop: '10px'}}></input>
                <input type="text" placeholder="Re-enter Password" onChange={(e) => setPasswordConfirmation(e.target.value)} className="loginsignupinput" style={{marginTop: '10px'}}></input>
                <input type="submit" value="Sign Up" className="loginsignupbtn" style={{marginTop: '10px', marginLeft: '5px'}}></input>
            </form>
          </div>
          <div className="login" style={{display: display2? "block":"none"}}>
            <h1>Success!</h1>
            <p>You are now a member of NYC Drinkers Society!</p>
            <p>You can now save any favorite drinks that caught your eye.</p> 
            <p>You can also rate the best or the worst drinks in town.</p>
            <p>And don't forget... you can also view the Happy Hours of each bar or restaurant that don't really put it out there.</p>
            <iframe src="https://giphy.com/embed/10bHcDcPM925ry" width="480" height="230" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/leonardo-dicaprio-the-great-gatsby-tgif-10bHcDcPM925ry"></a></p>
            <Link to="/"><button className="loginsignupbtn">Home</button></Link>
          </div>
        </div>
    );
}

export default Signup;