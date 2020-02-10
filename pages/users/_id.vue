<template>
  <div>
    <navbar></navbar>
    <div class="ui container grid" v-if="user">
      <div class="ui twelve wide column" >
        <div class="ui grid container">
          <div class="left floated six wide column">
            <h1 class="header">{{user.nickname}}'s top questions</h1>
          </div>
        </div>
        <div class="ui items" >
          <nuxt-link :to="'/questions/' + question.id" class="item" v-for="question in user.questions">
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
        </div>
      </div>



      <div class="ui four wide column">

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
      }
    },
    computed: {
      user() {
        return this.$store.state.user.foundUser;
      }
    },
    methods: {
    },
    beforeCreate() {
      this.$store.dispatch('user/getUser', {id: this.$route.params.id})
    }
  }
</script>
