<template>
  <div>
<!--    <div>-->
<!--      <logo />-->
    <navbar></navbar>
    <div class="ui container grid">
      <div class="ui twelve wide column" style="border: 1px solid black">
        <div class="ui grid container">
          <div class="left floated six wide column">
            <h1 class="header">All questions</h1>
          </div>
          <div class="right floated six wide column">
            <nuxt-link to="/questions/ask" class="ui button right floated">
              Ask a question
            </nuxt-link>
          </div>
        </div>
        <feed></feed>
<!--        <div class="ui items">-->
<!--          <div class="item">-->
<!--            <div class="ui small vertical statistic">-->
<!--              <div class="value">-->
<!--                2,204-->
<!--              </div>-->
<!--              <div class="label">-->
<!--                Answers-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="content" style="margin-left: 2rem;">-->
<!--              <div class="header">Arrowhead Valley Camp</div>-->
<!--              <div class="meta">-->
<!--                <span class="price">$1200</span>-->
<!--                <span class="stay">1 Month</span>-->
<!--              </div>-->
<!--              <div class="description">-->
<!--                <p></p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="ui divider"></div>-->
<!--        </div>-->
<!--        <button class="ui button">Load more</button>-->
      </div>



      <div class="ui four wide column" style="border: 1px solid black;">
        sss
      </div>
    </div>
<!--    <nuxt-link to="/questions/1">question</nuxt-link>-->
    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue';
import Feed from "../components/Feed.vue";

export default {
  components: {
    Logo,
    Navbar,
    Feed
  }
}
</script>

<style>
/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

/*.title {*/
/*  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,*/
/*    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
