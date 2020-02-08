<template>
    <div class="ui items" >
      <nuxt-link :to="'questions/' + question.id" class="item" v-for="question in questions">
        <div class="ui small vertical statistic">
          <div class="value">
            2,204
          </div>
          <div class="label">
            Answers
          </div>
        </div>
        <div class="content" style="margin-left: 2rem;">
          <div class="header">{{question.title}}</div>
          <div class="meta">
            <span class="">{{question.user.nickname}}</span>
            <span class="">2020-02-22 00:00:00</span>
          </div>
          <div class="description">
            <p></p>
          </div>
        </div>
        <div class="ui divider"></div>
      </nuxt-link>

      <button class="ui button">Load more</button>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        page: 1,
        questions: [{id: 1,title: 'ddddd d d d ddd d', content: 'sdfsd dfs fds fsd fsd fsd fds fsd fsd fsd fsd fs fy jdyf  hdrt hd', user: {id: 1, nickname: 'dsddd'}}, {id: 2,title: 'ddddd d d d ddd d', content: 'sdfsd dfs fds fsd fsd fsd fds fsd fsd fsd fsd fs fy jdyf  hdrt hd', user: {id: 1, nickname: 'dsddd'}}]
      }
    },
    computed: {},
    methods: {}
  }
</script>
