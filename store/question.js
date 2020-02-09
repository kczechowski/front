import api from "../api/api";

export const state = () => ({
  addedQuestion: null,
  isAddQuestionError: false,
  foundQuestion: null,
  isNotFoundQuestion: false,
  questions: [],
});

export const mutations = {
  questionAdded(state, args) {
    state.addedQuestion = args;
    state.isAddQuestionError = false;
  },
  questionNotAdded(state) {
    state.isAddQuestionError = true;
  },
  questionGet(state, args) {
    state.foundQuestion = args;
    state.isNotFoundQuestion = false;
  },
  questionsGet(state, args) {
    state.questions = args;
  },
  questionNotFound(state, args) {
    state.foundQuestion = null;
    state.isNotFoundQuestion = true;
  },
  questionsSearched(state, args) {

  },
  questionAnswered(state, args) {

  },
};

export const actions = {
  async askQuestion(context, args) {

    const {title, content, tags} = args;

    return api.askQuestion(title, content, tags).then(json => {
      context.commit('questionAdded', json);
    }).catch(e => {
      context.commit('questionNotAdded');
    });
  },
  async answerQuestion(context, args) {

  },
  async deleteQuestion(context, args) {

  },
  async getQuestion(context, args) {
    return api.getQuestion(args.id).then(json => {
      context.commit('questionGet', json);
    }).catch(e => {});
  },
  async getQuestions(context, args) {
    return api.getQuestions().then(json => {
      context.commit('questionsGet', json);
    }).catch(e => {});
  },
  async searchQuestions(context, args) {

  },

}
