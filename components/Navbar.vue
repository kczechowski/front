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
      <a class="ui item" v-if="!isLoggedIn" @click="singin">
        Sign in
      </a>
      <a class="ui item" v-if="!isLoggedIn">
        Sign up
      </a>
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
        }
    },
    methods: {
      getSearchResults(val) {
        this.$data.searchResults = [{ key: '1', value: '1', text: 'Test1' },{ key: '2', value: '2', text: 'Test2' }];
      },
      singin() {
        this.$store.commit('user/signin');
      },
      logout() {
        this.$store.commit('user/logout');
      }
    }
  }
</script>
