import React, { useEffect, useState } from 'react';
import UserItem from '../UsersList/UserItem.jsx';
import api from '../../utils/Api.js';

function App() {
  const [users, setUsers] = useState([]);

  function handleButtonClick(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  useEffect(() => {
    api.getUsers()
      .then((res) => setUsers(res.slice(0, 5)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <ul className="app__users-list">
          {
            users.map((userData) => (
              <UserItem data={userData} handleDelete={handleButtonClick} key={userData.id} />))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
