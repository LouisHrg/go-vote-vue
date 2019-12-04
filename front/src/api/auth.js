import axios from './config';

export default {
  getToken (email, password) {
    return axios.post('/login', { email, password });
  },
  getUserInfo () {
    return axios.get('/users/me');
  }
};
