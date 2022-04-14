import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Home from "./Home";
import Search from "./Search";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import SavedDrinks from "./SavedDrinks";

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
          <Route path="/saved">
            <SavedDrinks/>
          </Route>
          <Route path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      </div>
      <div id="bottomnavbar">
        <Link to="/privacy-policy" style={{textDecoration: 'none', color: 'white'}}><p>Private Policy</p></Link>
        <Link to="/terms-of-service" style={{textDecoration: 'none', color: 'white'}}><p>Terms Of Service</p></Link>
        <p>© 2022 NYC Drinking Society</p>
      </div>
    </BrowserRouter>
  );
}

export default App;