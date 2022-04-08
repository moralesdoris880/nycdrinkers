import { Link } from "react-router-dom";
import Button from "./Button";

function NavBar({user, setUser, setSearchAnswers}){

    function handleLogout(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
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
            <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
}

export default NavBar;