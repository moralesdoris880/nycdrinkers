import { Link } from "react-router-dom";

function NavBar({user, setUser}){

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
            <input placeholder="Find drinks, restaurants..."></input>
            <button>Search</button>
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
            <input placeholder="Find drinks, restaurants..."></input>
            <button>Search</button>
            <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
}

export default NavBar;