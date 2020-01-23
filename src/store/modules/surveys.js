import resourceApi from '@/api/surveys';

const state = {
  surveys: null,
  survey: null
};

const getters = {
  getSurvey: state => state.survey,
  getSurveys: state => state.surveys
};

const mutations = {
  setSurveys (state, surveys) {
    state.surveys = surveys;
  },
  setSurvey (state, survey) {
    state.survey = survey;
  }
};

const actions = {
  async fetchSurveys ({ commit }) {
    const { data: surveys } = await resourceApi.getSurveys();
    commit('setSurveys', surveys);
  },
  async fetchSurvey ({ commit }, id) {
    const { data: survey } = await resourceApi.getSurvey(id);
    commit('setSurvey', survey.data);
  },
  async putSurvey ({ commit }, id, resource) {
    const { data: res } = await resourceApi.putSurvey(id, resource);
    commit('setSurvey', res);
  },
  async postSurvey ({ commit }, resource) {
    const { data: res } = await resourceApi.postSurvey(resource);
    commit('setSurvey', res);
  },
  vote ({ commit }, { response, survey }) {
    commit('setSurvey', {
      ...survey,
      Responses: [
        ...survey.Responses,
        response
      ]
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
