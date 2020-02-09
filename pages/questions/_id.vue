<template>
  <div>
    <navbar></navbar>
    <div class="ui container centered grid">
      <div class="ui eight wide column" v-if="question">
        {{question.title}}
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
        id: this.$route.params.id
      }
    },
    computed: {
      question: function () {
        return this.$store.state.question.foundQuestion;
      }
    },
    beforeCreate() {
      this.$store.dispatch('question/getQuestion', {id: this.$route.params.id});
    }
  }
</script>
