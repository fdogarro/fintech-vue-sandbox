<template>
  <div>
    <v-btn flat small
      v-bind:id="buttonID"
      :class="button.type"
      v-for="button in buttonConfig"
      @click.stop.prevent="onButtonActions"
      :key="button.id" >{{ button.name }}</v-btn>
  </div>
</template>

<script>
export default {
  props:['buttonConfig', 'onButtonActions', 'buttonID'],
  data(){
    return{
    }
  }
}
</script>

<style>
</style>
