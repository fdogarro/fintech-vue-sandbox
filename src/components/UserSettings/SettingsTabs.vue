<template>
  <v-tabs
    fixed-tabs
    color="grey darken-2"
    dark slider-color="primary">
    <v-tab>Portfolio View</v-tab>
    <v-tab-item class="grey darken-3"><Settings-Portfolio/></v-tab-item>
    <v-tab>Position View</v-tab>
    <v-tab-item class="grey darken-3"><Settings-Position/></v-tab-item>
  </v-tabs>
</template>

<script>
import SettingsPortfolio from './SettingsPortfolio.vue'
import SettingsPosition from './SettingsPosition.vue'

export default {
  name: 'user-settings-tabs',
  components: {
    'Settings-Portfolio': SettingsPortfolio,
    'Settings-Position': SettingsPosition
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
