import api from "../api/api";

export const state = () => ({
  addedQuestion: null,
  isAddQuestionError: false,
  isAddAnswerError: false,
  foundQuestion: null,
  isNotFoundQuestion: false,
  questions: [],
  hasMore: true,
  searchResults: []
});

export const mutations = {
  questionAdded(state, args) {
    state.addedQuestion = args;
    state.isAddQuestionError = false;
    state.questions = [];
  },
  questionNotAdded(state) {
    state.isAddQuestionError = true;
  },
  answerAdded(state, args) {
    state.questions = [];
    state.isAddAnswerError = false;
  },
  answerNotAdded(state) {
    state.isAddAnswerError = true;
  },
  questionGet(state, args) {
    state.foundQuestion = args;
    state.isNotFoundQuestion = false;
  },
  questionsGet(state, args) {
    if(!args.length || args.length < 4)
      state.hasMore = false;
    if(args)
      state.questions.push(...args);
  },
  questionNotFound(state, args) {
    state.foundQuestion = null;
    state.isNotFoundQuestion = true;
  },
  questionsSearched(state, args) {
    state.searchResults = args;
  },
  deleteQuestionResults(state, args) {
    state.searchResults = [];
  }
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
    const {question_id, content} = args;
    return api.answerQuestion(question_id, content).then(json => {
      context.commit('answerAdded', json);
    }).catch(e => {
      context.commit('answerNotAdded');
    });
  },
  async deleteQuestion(context, args) {
    return api.deleteQuestion(args.id);
  },
  async getQuestion(context, args) {
    return api.getQuestion(args.id).then(json => {
      context.commit('questionGet', json);
    }).catch(e => {
      context.commit('questionNotFound', json);
    });
  },
  async getQuestions(context, args) {

    const urlParams = args;

    return api.getQuestions(urlParams).then(json => {
      context.commit('questionsGet', json);
    }).catch(e => {});
  },
  async searchQuestions(context, args) {
    const urlParams = args;

    return api.getQuestions(urlParams).then(json => {
      // const questions = json.map(q => {
      //   return {key: q.id, value: q.value, text: q.content};
      // })
      context.commit('questionsSearched', json);
    }).catch(e => {});
  },

}
