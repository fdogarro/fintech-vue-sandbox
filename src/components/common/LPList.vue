<template>
  <div>
    <ul class="tickers body-1">
      <li class="mr-2" v-for="item in items">{{ item.title}} <span class="body-2 ml-1 px-1 green">{{item.value}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['items'],
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .toolbar-header
    text-decoration none

  .title
    color #FFF

  .tickers li
    display inline-block
</style>
