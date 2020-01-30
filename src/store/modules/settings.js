const state = {
  bgColor: '#fff'
};

const getters = {
  getTheme: state => ({
    bgColor: state.bgColor
  })
};

const mutations = {
  setBackgroundColor (state, color) {
    state.bgColor = color;
  },
  setFontColor (state, color) {
    state.fontColor = color;
  }
};

const actions = {
  async changeTheme ({ commit }, theme) {
    if (theme === 'dark') {
      commit('setBackgroundColor', '#000');
      commit('setFontColor', '#FFF');
    } else if (theme === 'light') {
      commit('setBackgroundColor', '#FFF');
      commit('setFontColor', '#000');
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
