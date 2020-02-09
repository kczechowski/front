<template>
  <div class="ui secondary menu container grid">
    <nuxt-link to="/" class="item active">Home</nuxt-link>
    <div class="right menu">
      <div class="item">
        <sui-dropdown
          placeholder="Search..."
          search
          selection
          icon="search"
          v-model="searchVal"
          @keyup="getSearchResults"
          :options="searchResults"
        />
      </div>
      <nuxt-link to="/login" class="ui item" v-if="!isLoggedIn" >
        Sign in
      </nuxt-link>
      <nuxt-link to="/register" class="ui item" v-if="!isLoggedIn">
        Sign up
      </nuxt-link>
      <nuxt-link :to="'/user/' + user.id" class="ui item" v-if="isLoggedIn">{{user.nickname}}</nuxt-link>
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
        searchVal: null,
        searchResults: [],
      }
    },
    computed: {
        isLoggedIn: function () {
          return this.$store.state.user.isLoggedIn;
        },
      user: function () {
        return this.$store.state.user.user;
      }
    },
    methods: {
      getSearchResults(val) {
        this.$data.searchResults = [{ key: '1', value: '1', text: 'Test1' },{ key: '2', value: '2', text: 'Test2' }];
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
