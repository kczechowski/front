<template>
  <div class="ui secondary menu container grid">
    <nuxt-link to="/" class="item active">Home</nuxt-link>
    <div class="right menu">
      <div class="item" v-if="isLoggedIn">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." v-model="searchVal" @keyup="getSearchResults">
          <i class="search icon"></i>
        </div>
      </div>
      <nuxt-link to="/login" class="ui item" v-if="!isLoggedIn">
        Sign in
      </nuxt-link>
      <nuxt-link to="/register" class="ui item" v-if="!isLoggedIn">
        Sign up
      </nuxt-link>
      <nuxt-link :to="'/users/' + user.id" class="ui item" v-if="isLoggedIn">{{user.nickname}}</nuxt-link>
      <a class="ui item" v-if="isLoggedIn" @click="logout">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchVal: '',
      }
    },
    computed: {
      isLoggedIn: function () {
        return this.$store.state.user.isLoggedIn;
      },
      user: function () {
        return this.$store.state.user.user;
      },
    },
    methods: {
      getSearchResults(val) {
        if (this.$data.searchVal === '') this.deleteSearchResults();
        else
          this.$store.dispatch('question/searchQuestions', {phrase: this.$data.searchVal});
        // this.$data.searchResults = [{ key: '1', value: '1', text: 'Test1' },{ key: '2', value: '2', text: 'Test2' }];
      },
      deleteSearchResults() {
        this.$store.commit('question/deleteQuestionResults');
        // this.$data.searchResults = [{ key: '1', value: '1', text: 'Test1' },{ key: '2', value: '2', text: 'Test2' }];
      },
      singin() {
        this.$store.dispatch('user/signin');
      },
      logout() {
        this.$store.commit('user/logout');
      }
    }
  }
</script>
