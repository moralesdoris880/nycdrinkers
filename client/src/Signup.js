import React, { useState } from "react";

function Signup({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
              r.json().then((user) => setUser(user));
            } else {
              r.json().then(() => console.log("Not created :<"));
            }
          });
    }

    return(
        <div>
            <h1>Sign Up for NYC Drinkers Society</h1>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="text" placeholder="Re-enter Password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    );
}

export default Signup;