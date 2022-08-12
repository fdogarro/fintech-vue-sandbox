import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TradeTicketDialog from '@/components/TradeTicket/TradeTicketDialog'
import InfiniteTable from '@/components/Performance/InfiniteTable'
import ListTrader from '@/components/ListTrader/ListTraderDialog'
import Charts from '@/components/charts/LineChartDialog'
import PortfolioMain from '@/components/Bookmon/PortfolioSection'
import PortfolioDetails from '@/components/Bookmon/PortfolioDetails/PortfolioDetails'
import PortfolioSummary from '@/components/Bookmon/PortfolioSummary'
import PortfolioMatrix from '@/components/Bookmon/PortfolioMatrix/PortfolioMatrix'
import Charting from '@/components/Bookmon/Charting/Charting'
import HedgeView from '@/components/Bookmon/HedgeView/HedgeView'
import PortfolioTechnical from '@/components/Bookmon/PortfolioTechnical/PortfolioTechnical'
import OptionsGreek from '@/components/Bookmon/OptionsGreek/OptionsGreek'
import PortfolioMetrics from '@/components/Bookmon/PortfolioMetrics/PortfolioMetrics'
import AllocationRatio from '@/components/AllocationRatio/AllocationRatioDialog'
import PMBlotter from '@/components/PMBlotter/PMBlotterDialog'
import DeskBlotter from '@/components/DeskBlotter/DeskBlotterDialog'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        { path: '/', name: 'main', component: PortfolioMain },
        { path: '/details', name: 'details', component: PortfolioDetails },
        { path: '/summary', name: 'summary', component: PortfolioSummary },
        { path: '/matrix', name: 'matrix', component: PortfolioMatrix },
        { path: '/hedgeview', name: 'hedgeview', component: HedgeView },
        { path: '/technical', name: 'technical', component: PortfolioTechnical },
        { path: '/optionsgreek', name: 'optionsgreek', component: OptionsGreek }
        // { path: '/metrics', name: 'metrics', component: PortfolioMetrics }
      ]
    },
    {
      path: '/tradeticket',
      name: 'TradeTicket',
      component: TradeTicketDialog
    },
    {
      path: '/allocationratio',
      name: 'AllocationRatio',
      component: AllocationRatio
    },
    {
      path: '/pmblotter',
      name: 'PMBlotter',
      component: PMBlotter
    },
    {
      path: '/deskblotter',
      name: 'DeskBlotter',
      component: DeskBlotter
    },
    {
      path: '/performance',
      name: 'InfiniteTable',
      component: InfiniteTable
    },
    {
      path: '/listtrader',
      name: 'ListTrader',
      component: ListTrader
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    { path: '/charting', name: 'charting', component: Charting }
  ]
})
