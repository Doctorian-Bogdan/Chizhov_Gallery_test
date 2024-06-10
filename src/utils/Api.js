import axios from 'axios';

class Api {
  _checkResponse(response) {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

const api = new Api();

export default api;
