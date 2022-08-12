<template>
    <v-dialog v-model="dialog" max-width="700px">
      <v-btn slot="activator" small color="grey darken-4" @click.native.stop="dialog = true">User Settings</v-btn>
      <v-card color="grey darken-3">
        <v-card-title>
          <span class="headline">User Settings</span>
        </v-card-title>
        <v-card-text>
          <Settings-Tabs/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-2" @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" @click.native="dialog = false">Save Settings</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import SettingsTabs from './SettingsTabs.vue'

export default {
  name: 'user-settings-dialog',
  components: {
    'Settings-Tabs': SettingsTabs
  },
  data () {
    return {
      dialog:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  div.card__text
    padding 0px
</style>
