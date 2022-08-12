<template>
  <ul>
    <li v-for="detail in details" :key="detail.id" style="display:inline-block; margin-right: 15px;">
      <div>{{ detail.name }} <br/>
        {{ detail.value }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      details: [
        { name: 'Last', value: 'detail' },
        { name: 'Change', value: 'detail' },
        { name: '% Chg', value: 'detail' },
        { name: 'Volume', value: 'detail' },
        { name: 'ADV 200', value: 'detail' },
        { name: 'High', value: 'detail' },
        { name: 'Low', value: 'detail' },
        { name: 'VWAP', value: 'detail' },
        { name: 'Curr Bps', value: 'detail' },
        { name: 'Curr Pos', value: 'detail' },
        { name: 'Curr Exp', value: 'detail' },
        { name: 'Cost Bas', value: 'detail' },
        { name: 'Borrow', value: 'detail' }
      ]
    }
  }
}
</script>

<style>
</style>
