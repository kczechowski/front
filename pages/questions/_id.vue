<template>
  <div>
    <navbar></navbar>
    <div class="ui container centered grid">
      <div class="ui ten wide column" v-if="question">
        <sui-button color="red" v-if="isAdmin" @click="deleteQuestion">Delete question</sui-button>
        <div class="ui items" >
          <div class="item">
            <div class="ui small vertical statistic">
              <div class="value">
                {{question.answers.length}}
              </div>
              <div class="label">
                Answers
              </div>
            </div>
            <div class="content" style="margin-left: 2rem;">
              <div class="header">{{question.title}}</div>
              <div class="meta">
                <nuxt-link :to="'/users/' + question.user.id" class="">{{question.user.nickname}}</nuxt-link>
                <span class="">{{question.createdAt}}</span>
              </div>
              <div class="description">
                <pre>{{question.content}}</pre>
              </div>
            </div>
            <div class="ui divider"></div>
          </div>
        <div>
          <sui-form @submit="answerQuestion" class="item" :error="isError">
            <div class="ui error message">
              <div class="header">Failed</div>
              <p>Fail message</p>
            </div>
            <sui-form-field>
              <label>Answer</label>
              <textarea v-model="content" rows="2"></textarea>
            </sui-form-field>
            <sui-button type="submit">Submit</sui-button>
          </sui-form>
        </div>
        </div>
        <div class="ui items">
          <div class="item" v-for="answer in question.answers">
            <div class="content" style="margin-left: 2rem;">
              <div class="header">Answer</div>
              <div class="meta">
                <nuxt-link :to="'/users/' + answer.user.id" class="">{{answer.user.nickname}}</nuxt-link>
                <span class="">{{answer.createdAt}}</span>
              </div>
              <div class="description">
                <pre>{{answer.content}}</pre>
              </div>
            </div>
            <div class="ui divider"></div>
          </div>
        </div>
      </div>
      <div class="ui ten wide column" v-else>
        404 Question not found
      </div>
    </div>
  </div>
</template>



<script>
  import Navbar from "../../components/Navbar";

  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        id: this.$route.params.id,
        content: '',
        isError: false,
      }
    },
    computed: {
      question: function () {
        return this.$store.state.question.foundQuestion;
      },
      isAdmin: function () {
        return this.$store.state.user.user.roles.includes('ROLE_ADMIN');
      }
    },
    methods: {
      answerQuestion: function (e) {
        e.preventDefault();
        this.$store.dispatch('question/answerQuestion', { question_id: this.$store.state.question.foundQuestion.id, content: this.$data.content}).then(json => {
          this.$store.dispatch('question/getQuestion', {id: this.$route.params.id});
          if(this.$store.state.question.isAddAnswerError) this.$data.isError = true; else this.$data.isError = false;
        });
      },
      deleteQuestion: function(e) {
        e.preventDefault();
        this.$store.dispatch('question/deleteQuestion', {id: this.$store.state.question.foundQuestion.id}).then(r => {
          this.$router.go();
        })
      },
    },

    beforeCreate() {
      this.$store.dispatch('question/getQuestion', {id: this.$route.params.id});
    }
  }
</script>
