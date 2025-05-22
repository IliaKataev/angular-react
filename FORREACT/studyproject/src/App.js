import './App.css';
import React, {useState} from 'react';
import SearchForm from "./SearchForm/SearchForm";
import UserList from "./SearchForm/UserList";



function App(){

    const [userArr, setUserArr] = useState([]);
    const updateUser = user => {
        setUserArr([...userArr, user]);
    };

    return(
        <div>
            <SearchForm onSubmit={updateUser}/>
            <UserList users={userArr}/>
        </div>
    )
}


/*function App() {

    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString())

    const timerAction = () => {
        setCurrTime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        let handlerTimer = setInterval(timerAction, 1000);
        return () => clearInterval(handlerTimer);
    }, []);

  return (
    <div>
        <h1>{currTime}</h1>
    </div>
  );
} */

export default App;
