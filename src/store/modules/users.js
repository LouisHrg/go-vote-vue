import userApi from '@/api/users';

const state = {
  user: null,
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
};

const actions = {
  async patchUser ({ commit }, uuid, resource) {
    console.log(resource.firstname);
    
    const { data: res } = await userApi.patchUser(uuid, resource);
    commit('setUser', res);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
