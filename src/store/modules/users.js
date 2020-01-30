import userApi from '@/api/users';

const state = {
  user: null
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
};

const actions = {
  async patchUser ({ commit }, resource) {
    const { data: res } = await userApi.patchUser(resource.uuid, resource);
    commit('setUser', res);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
