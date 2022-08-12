<template>
  <v-card-text>
    <v-form>
      <v-text-field
        label="Symbol"
        class="ticket-form-fields"
      ></v-text-field>
      <v-text-field
        label="Bps"
        class="ticket-form-fields"
      ></v-text-field>
      <v-text-field
        label="Target Box"
        class="ticket-form-fields"
      ></v-text-field>
      <v-text-field
        label="Quantity"
        class="ticket-form-fields"
      ></v-text-field>
    </v-form>
    <v-form>
      <v-text-field
        label="Notional"
        class="ticket-form-fields"
      ></v-text-field>
      <v-select
        :items="orderTypeItems"
        v-model="orderType"
        label="Order Type"
        single-line
        bottom
        class="ticket-form-fields"
      ></v-select>
      <v-text-field
        label="Price"
        class="ticket-form-fields"
      ></v-text-field>
    </v-form>
    <v-form>
      <v-select
        :items="subStrategy1Items"
        v-model="subStrategy1"
        label="Sub-Strategy 1"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="subStrategy2Items"
        v-model="subStrategy2"
        label="Sub-Strategy 2"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
    </v-form>
    <v-form>
      <v-select
        :items="gtcItems"
        v-model="gtc"
        label="GTC"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="isSwapItems"
        v-model="isSwap"
        label="Is Swap"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="tradeTypeItems"
        v-model="tradeType"
        label="Trade Type"
        single-line
        bottom
        style="width: 27.5%; display: inline-block; margin-right: 20px;"
      ></v-select>
    </v-form>
    <v-form>
      <v-select
        :items="mgmtCompanyItems"
        v-model="mgmtCompany"
        label="Mgmt Company"
        single-line
        bottom
        style="width: 43%; display: inline-block; margin-right: 20px;"
      ></v-select>
      <v-select
        :items="uniqueStrategyItems"
        v-model="uniqueStrategy"
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
  data () {
    return {
      orderType: null,
      subStrategy1: null,
      subStrategy2: null,
      gtc: null,
      isSwap: null,
      tradeType: null,
      mgmtCompany: null,
      uniqueStrategy: null,
      orderTypeItems: [
        { text: 'none' },
        { text: 'type1' },
        { text: 'type2' },
        { text: 'type3' }
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
        { text: 'item 1' },
        { text: 'item 2' }
      ],
      isSwapItems: [
        { text: 'yes' },
        { text: 'no' }
      ],
      tradeTypeItems: [
        { text: 'type A' },
        { text: 'type B' }
      ],
      mgmtCompanyItems: [
        { text: 'type A' },
        { text: 'type B' }
      ],
      uniqueStrategyItems: [
        { text: 'type A' },
        { text: 'type B' }
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
