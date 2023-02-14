export const state = () => ({
  message: "hello"
});

export const mutations = {
  updateMessage(state, payload) {
    state.message = payload;
  }
};

export const actions = {
  updateMessageAction(context, payload) {
    context.commit("updateMessage", payload);
  }
};
