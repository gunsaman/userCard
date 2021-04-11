import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserCard from '../src/components/UserCard';
import UserDetail from '../src/components/UserDetail';


function App(props) {
  const url_link = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  // calling getData function after first rendering
  useEffect(()=> {
      getData();

  },[]);

// fetch data from api and save it to the users variable
  const getData = () => {
    fetch(url_link)
      .then(response => response.json())
      .then(data => setUsers(data))
  }
  
  return(
    <Router>
      <Route exact path="/">
      <div className="cards" >
          {users.map
            (user => <UserCard 
                        key={user.id} 
                        id = {user.id} 
                        name={user.name} 
                        username={user.username} 
                        website={user.website}
                        /> )}
      </div>
      </Route>
      <Route path="/user/:id">
        <UserDetail data={users} />
      </Route>
    </Router>
  )
}

export default App;
