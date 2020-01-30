import axios from './config';

export default {
  getUsers () {
    return axios.get('/users');
  },
  getUser () {
    return axios.get('/user');
  },
  patchUser (uuid, resource) {
    return axios.patch(`/users/${uuid}`, resource);
  }
};
