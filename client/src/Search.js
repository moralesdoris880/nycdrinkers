import { Redirect } from "react-router-dom";
import Drink from "./Drink";

function Search({searchAnswers,user}){

    if(!user)return <Redirect to="/"/>

    if(searchAnswers.length===0) return <h1>Your search did not match any drinks. Please Try Again.</h1>

    return(
        <div>
            {searchAnswers.map((drink) => <Drink drink={drink} user={user}/>)}
        </div>
    );
}

export default Search;