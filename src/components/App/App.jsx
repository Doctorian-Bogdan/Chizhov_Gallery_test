import React, { useEffect, useState } from 'react';
import UserItem from '../UsersList/UserItem.jsx';
import api from '../../utils/Api.js';
import Preloader from '../Preloader/Preloader.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteCard(id) {
    setIsLoading(true);
    api.deleteUser(id)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    api.getUsers()
      .then((res) => setUsers(res.slice(0, 5)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <ul className="app__users-list">
          {
            users.map((userData) => (
              <UserItem data={userData} handleButton={handleDeleteCard} key={userData.id} />))
          }
        </ul>
      </div>
      <Preloader isLoading={isLoading} />
    </div>
  );
}

export default App;
