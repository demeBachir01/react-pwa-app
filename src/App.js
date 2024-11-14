import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const user = res.data;
        setuser(user); 
      }).catch(error => {
        console.error('There was a problem with the request:', error);}); 
  });
  return (
    <div>
      <h1> Consommation de L'api users </h1>
      <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
      </tr>
    </thead>
    <tbody>
      {user.map((user) => (
        <tr >
          <td>{user.id}</td>
          <td>{user.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
);
}

export default App;
