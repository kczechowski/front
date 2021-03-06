import api from "../api/api";

export const state = () => ({
  isLoggedIn: false,
  hasFailedLogin: false,
  user: null,
  foundUser: null,
  hasFailedRegister: false,
})

export const mutations = {
  logout(state) {
    state.isLoggedIn = false;
    state.hasFailedLogin = false;
  },
  failLogin(state) {
    state.isLoggedIn = false;
    state.hasFailedLogin = true;
  },
  userFound(state, args) {
    state.foundUser = args;
  },
  loginOK(state, args) {
    state.isLoggedIn = true;
    state.hasFailedLogin = false;

    const {id, nickname, email, roles} = args;

    state.user = {id, nickname, email, roles}
  },
  registerOK(state, args) {
    state.hasFailedRegister = false;
  },
  registerFail(state, args) {
    state.hasFailedRegister = true;
  }
}

export const actions = {
  async signin(context, args) {

    const {login, password} = args;

    return api.login(login, password).then(json => {
      context.commit('loginOK', json);
    }).catch(e => {
      context.commit('failLogin');
    });
  },
  async signup(context, args) {

    const {login, password, email} = args;

    return api.register(email, login, password).then(json => {context.commit('registerOK')}).catch(e => {context.commit('registerFail')});
  },
  async getUser(context, args) {
    const {id} = args;

    return new Promise((async (resolve, reject) => {
      let user = await api.getUser(id);
      user.questions = await api.getQuestions({user_id: id});
      resolve(context.commit('userFound', user));
    }));

  }
}
