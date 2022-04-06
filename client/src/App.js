import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <NavBar user={user} setUser={setUser} />
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route>
          <Route path="/success">
            <h1>Im success</h1>
          </Route>
          <Route path="/">
            <h1>Im home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;