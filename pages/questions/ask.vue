<template>
  <div>

    <navbar></navbar>
    <div class="ui container centered grid">
      <div class="ui eight wide column">
        <sui-form @submit="askQuestion" >
          <div class="ui error message">
            <div class="header">Failed</div>
            <p>Fail message</p>
          </div>
          <sui-form-field>
            <label>Title</label>
            <input placeholder="Question title" v-model="title">
          </sui-form-field>
          <sui-form-field>
            <label>Question</label>
            <textarea v-model="content"></textarea>
          </sui-form-field>
          <sui-form-field>
          <sui-checkbox class="ui button" @change="toggleCategory(category)" v-for="category in categories"
                        v-bind:class="[category.color, 'inverted']">{{category.name}}
          </sui-checkbox>
          </sui-form-field>
          <sui-button type="submit">Submit</sui-button>
        </sui-form>
      </div>
    </div>

  </div>


</template>

<script>

  import Navbar from "../../components/Navbar";

  export default {
    data() {
      return {
        content: '',
        title: '',
        categories: [
          {
            id: 1,
            name: 'Python',
            isToggled: false,
            color: 'olive'
          },
          {
            id: 2,
            name: 'Java',
            isToggled: false,
            color: 'teal'
          },
          {
            id: 3,
            name: 'PHP',
            isToggled: false,
            color: 'pink'
          }
        ]
      }
    },
    components: {
      Navbar,
    },
    methods: {
      toggleCategory(category) {
        category.isToggled = !category.isToggled;
        console.log(category);
        console.log(this.$store.state.question);
      },
      async askQuestion(e) {
        e.preventDefault();
        const categories = this.$data.categories.filter(c => c.isToggled).map(c => c.id);
        await this.$store.dispatch('question/askQuestion', {
          title: this.$data.title,
          content: this.$data.content,
          tags: categories
        });

        if(this.$store.state.question.isAddQuestionError) this.$data.isError = true;
        else this.$router.push(`/questions/` + this.$store.state.question.addedQuestion.id);
        // if(this.$store.state.user.hasFailedLogin) this.$data.isError = true;
        // else this.$router.push('/');
      }
    }
  }

</script>
