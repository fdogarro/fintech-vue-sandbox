<template>
  <div>
    <div style="padding: 10px 30px">
      <v-checkbox
        style="display: inline-block; width: 27%; margin-right: 25px;"
        :label="`Checkbox: ${checkbox.toString()}`"
        v-for="setting in settings" :key="setting.id"
        v-model="checkbox"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings-position',
  data () {
    return {
      settings: 22,
      checkbox: ['test']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
