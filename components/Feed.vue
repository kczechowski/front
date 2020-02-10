<template>
    <div class="ui items" >
      <nuxt-link :to="'questions/' + question.id" class="item" v-for="question in questions">
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
            <span class="">{{question.user.nickname}}</span>
            <span class="">{{question.createdAt}}</span>
          </div>
          <div class="description">
            <p>{{question.content}}</p>
          </div>
        </div>
        <div class="ui divider"></div>
      </nuxt-link>

      <button class="ui button" @click="getMoreQuestions">Load more</button>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        page: 0,
      }
    },
    computed: {
      questions: function () {
        return this.$store.state.question.questions;
      },
    },
    methods: {
      getMoreQuestions: function () {
        if (this.$store.state.question.hasMore ) {
          this.$data.page += 1;
          this.$store.dispatch('question/getQuestions', {page: this.$data.page})
        }
      }
    },
    beforeCreate() {
      if(!this.$store.state.question.questions.length) {
        this.$store.dispatch('question/getQuestions', {page: 0});
      }
      console.log(this.$store.state.question.questions);
    }
  }
</script>
