<template>
  <v-container fluid grid-list-md class="main">
  <div>
    <Main-Toolbar/>
    <Fund-Section />
    <Strategy-Section />
  </div>
  </v-container>
</template>

<script>
import MainToolbar from './MainToolbar.vue'
import FundSection from './Bookmon/FundSection.vue'
import StrategySection from './Bookmon/StrategySection.vue'
import PositionSection from './Bookmon/PositionSection.vue'

export default {
  name: 'Main',
  components: {
    'Main-Toolbar': MainToolbar,
    'Fund-Section': FundSection,
    'Strategy-Section': StrategySection,
    'Position-Section': PositionSection
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .main
    padding:0;
</style>
