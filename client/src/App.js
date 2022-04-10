import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Home from "./Home";
import Search from "./Search";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  const [user, setUser] = useState(null);
  const[searchAnswers,setSearchAnswers] = useState([]);


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
    <NavBar user={user} setUser={setUser} setSearchAnswers={setSearchAnswers}/>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route>
          <Route path="/search">
            <Search searchAnswers={searchAnswers} user={user}/>
          </Route>
          <Route path="/terms-of-service">
            <TermsOfService/>
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy/>
          </Route>
          <Route path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      </div>
      <Link to="/privacy-policy"><p>Private Policy</p></Link>
      <Link to="/terms-of-service"><p>Terms Of Service</p></Link>
    </BrowserRouter>
  );
}

export default App;