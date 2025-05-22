import React, {useState} from "react";
import axios from "axios";


export default function SearchForm(props){
    const [userName, setUserName] = useState("")
    const handlerChange = event => {
        setUserName(event.target.value)
    };

    const handlerSubmit = async event => {
        event.preventDefault();

        const query = `https://api.github.com/users/${userName}`;

        let resp = await axios.get(query);
        console.log(resp)

        props.onSubmit(resp.data);
    };

    return(
        <form onSubmit={handlerSubmit}>
            <input type="text" style={{margin: "10px"}} required placeholder="input name to search"
            value={userName} onChange={handlerChange}/>
            <input type="submit" value="search github user"/>
        </form>
    )
}