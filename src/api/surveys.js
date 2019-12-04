import axios from './config';

export default {
  getSurveys () {
    return axios.get('/surveys');
  },
  getSurvey (id) {
    return axios.get(`/surveys/${id}`);
  },
  putSurvey (id, resource) {
    return axios.put(`/surveys/${id}`, { resource });
  },
  postSurvey (resource) {
    return axios.put(`/surveys`, { resource });
  }
};
