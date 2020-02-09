<template>
  <div>
    <!--    <div>-->
    <!--      <logo />-->
    <navbar></navbar>
    <div class="ui container centered grid">
      <div class="ui six wide column" >
        <sui-form @submit="login" :error="isError">
          <div class="ui error message">
            <div class="header">Failed</div>
            <p>Fail message</p>
          </div>
          <sui-form-field>
            <label>Username</label>
            <input placeholder="Username" v-model="username">
          </sui-form-field>
          <sui-form-field>
            <label>Password</label>
            <input type="password" placeholder="Password" v-model="password">
          </sui-form-field>
          <sui-button type="submit">Submit</sui-button>
        </sui-form>
      </div>
    </div>
  </div>

</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Navbar from '~/components/Navbar.vue';

  export default {
    components: {
      Logo,
      Navbar,
    },
    data() {
      return {
        username: null,
        password: null,
        isError: false,
      };
    },
    methods: {
      async login(e) {
        e.preventDefault();
        await this.$store.dispatch('user/signin', {
          login: this.$data.username,
          password: this.$data.password,
        });
        if(this.$store.state.user.hasFailedLogin) this.$data.isError = true;
        else this.$router.push('/');
      },
    }
  }
</script>

<style>

</style>
