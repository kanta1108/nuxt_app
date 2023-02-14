export const state = {
  count: 0
};

export const mutations = {
  addCount(state) {
    state.count++;
  },
  resetCount(state) {
    state.count = 0;
  }
};
