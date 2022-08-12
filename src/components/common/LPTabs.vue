<template>
  <div class="">
    <v-card class="grey darken-4">
    <v-tabs
      color="grey darken-4"
      dark
      slider-color="grey darken-1">
      <v-tab
      v-for="tab in tabConfig"
      :to="{name: tab.name}"
      :key="tab.name">
        {{tab.value}}
      </v-tab>
      <v-tab-item
        reverse-transition="disabled"
        transition="disabled">
        <v-card flat>
          <h1>Hello</h1>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <router-view/>
  </v-card>
  </div>



</template>

<script>
export default {
  props:['tabConfig'],
  data(){
    return{
    }
  }
}
</script>

<style>
</style>
