<template>
  <div>
      <v-btn outline color="black" v-for="button in buttonConfig" @click="onSymbolUpdate">{{ button.symbol }}</v-btn>
    <!-- <v-btn class="grey darken-4" v-for="button in buttons" >{{ button.name }}</v-btn> -->
  </div>
</template>

<script>

export default {
  props: ['buttonConfig', 'onSymbolUpdate'],
  data () {
    return {

    }
  },
  methods:{
    // onSymbolUpdate(evt){
    //     console.log("Symbol Update")
    // }
  }
}
</script>

<style>
</style>
