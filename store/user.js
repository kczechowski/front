export const state = () => ({
  isLoggedIn: false
})

export const mutations = {
  signin(state, login, password) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  }
}
