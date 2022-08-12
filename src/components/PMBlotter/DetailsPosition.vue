<template>
  <v-toolbar class="grey darken-3">
    <ul>
      <li v-for="detail in details" :key="detail.id" style="display:inline-block; margin-right: 15px;">
        <div>{{ detail.name }} <br/>
          {{ detail.value }}</div>
      </li>
    </ul>
    <v-spacer></v-spacer>
    <span><v-icon large>add_box</v-icon></span>
  </div>
</v-toolbar>
</template>

<script>

export default {
  data () {
    return {
      details: [
        { name: 'Last', value: '10.60' },
        { name: 'Change', value: '-0.06' },
        { name: '% Chg', value: '-0.56' },
        { name: 'Volume', value: '25,036,440' },
        { name: 'ADV 200', value: '50,252,740' },
        { name: 'High', value: '10.80' },
        { name: 'Low', value: '20.42' },
        { name: 'VWAP', value: '.' },
        { name: 'Curr Bps', value: '84' },
        { name: 'Curr Pos', value: '500,000' },
        { name: 'Curr Exp', value: '$675,167' },
        { name: 'Cost Bas', value: '0.00' },
        { name: 'Borrow', value: '0' }
      ]
    }
  }
}
</script>

<style>
</style>
