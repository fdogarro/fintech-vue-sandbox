<template>
  <v-card-text>
    <v-form ref="tradeData">
      <v-text-field
        label="Symbol"
        class="ticket-form-fields"
        v-model="tradeData['symbol']"
      ></v-text-field>
      <v-text-field
        label="Bps"
        class="ticket-form-fields"
        v-model="tradeData['bps']"
      ></v-text-field>
      <v-text-field
        label="Target Bps"
        class="ticket-form-fields"
        v-model="tradeData['targetBps']"
      ></v-text-field>
      <v-text-field
        label="Quantity"
        class="ticket-form-fields"
        v-model="quantityData"
      ></v-text-field>
      <v-text-field
        label="Notional"
        class="ticket-form-fields"
        v-model="tradeData['notional']"
      ></v-text-field>
      <v-select
        :items="orderTypeItems"
        v-model="tradeData['orderType']"
        item-value="text"
        label="Order Type"
        single-line
        bottom
        class="ticket-form-fields"
      ></v-select>
      <v-text-field
        v-model="tradeData['price']"
        label="Price"
        class="ticket-form-fields"
      ></v-text-field>
      <v-select
        :items="subStrategy1Items"
        v-model="tradeData['strategy1']"
        label="Strategy 1"
        item-value="text"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="subStrategy2Items"
        v-model="tradeData['strategy2']"
        item-value="text"
        label="Strategy 2"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="gtcItems"
        v-model="tradeData['gtc']"
        item-value="text"
        label="GTC"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="isSwapItems"
        v-model="tradeData['isSwap']"
        item-value="text"
        label="Is Swap"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="tradeTypeItems"
        v-model="tradeData['tradeType']"
        item-value="text"
        label="Trade Type"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="mgmtCompanyItems"
        v-model="tradeData['port']"
        item-value="text"
        label="Portfolio"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="uniqueStrategyItems"
        v-model="tradeData['uniqueStrategy']"
        item-value="text"
        label="Unique Strategy"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
    </v-form>
  </v-card-text>
</template>

<script>

export default {
  props:['quantityData', 'tradeData', 'tradeOpts'],
  data () {
    return {
      orderTypeItems: [
        { text: 'LMT' },
        { text: 'MKT' }
      ],
      subStrategy1Items: [
        { text: 'sub A' },
        { text: 'sub B' }
      ],
      subStrategy2Items: [
        { text: 'sub C' },
        { text: 'sub D' }
      ],
      gtcItems: [
        { text: 'no' },
        { text: 'yes' }
      ],
      isSwapItems: [
        { text: 'no' },
        { text: 'yes' }
      ],
      tradeTypeItems: [
        { text: 'BUY' },
        { text: 'COVER' },
        { text: 'SELL' },
        { text: 'SHORT' },
      ],
      mgmtCompanyItems: [
        { text: 'ASIA_FOCUS' }
      ],
      uniqueStrategyItems: [
        { text: 'LP Fundamental' },
        { text: 'LP Fixed' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ticket-form-fields
    width 20%
    display inline-block
    margin-right 20px
</style>
