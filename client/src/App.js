import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Home from "./Home";

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
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;