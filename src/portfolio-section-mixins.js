import _ from 'lodash';

export let portfolioSectionMixins = {
	data(){
		return{
			deskBlotterTickerVal:'',
      confirmationMap: [],
      launchSelectBlotter: false,
      quickTradeQuantity:null,
      quickTradeHotKey:'',
      ticketHotKey:'',
      ticketMapping:{
        symbol:'',
        dest:'LP',
        user:'jon.withaar',
        time: Date.now(),
        route:'EMSX'
      },
      quickTradeVals:{
        symbol:'',
        dest:'LP',
        user:'jon.withaar',
        time: Date.now(),
        route:'EMSX',
        portfolio:'ASIA_FOCUS'
      },
      ticketOptions:{
        type:null,
      },
      symbolObj:null,
      tradeTicketConfirmModel:false,
      gridOptions:null,
      dialog: false,
      tickerData:'',
      tradeConfirmDialog:false,
      launchTrade:false,
      quickTradePrimary: [
        { name: 'Buy', type: 'blue lighten-1', id:1, disable:false},
        { name: 'Cover', type: 'green darken-1', id:3, disable:false},
        { name: 'Sell', type: 'red darken-4', id:2, disable:false },
        { name: 'Short', type: 'yellow darken-2', id:4, disable:false}
      ],
      quickTradeSecondary: [
        { name: 'Buy', type: 'blue lighten-1', id:5, value:150, disable:false},
        { name: 'Cover', type: 'green darken-1', id:6, value:250, disable:false},
        { name: 'Sell', type: 'red darken-4', id:7, value:550, disable:false},
        { name: 'Short', type: 'yellow darken-2', id:8, value:1500, disable:false},
        { name: 'Buy', type: 'blue lighten-1', id:9, value:2500, disable:false},
        { name: 'Cover', type: 'green darken-1', id:10, value:5500, disable:false},
        { name: 'Sell', type: 'red darken-4', id:11, value:50000, disable:false},
        { name: 'Short', type: 'yellow darken-2', id:12, value:'', disable:false},
        { name: 'Buy', type: 'blue lighten-1', id:13, value:'', disable:false},
        { name: 'Cover', type: 'green darken-1', id:14, value:'', disable:false},
        { name: 'Sell', type: 'red darken-4', id:15, value:'', disable:false},
        { name: 'Short', type: 'yellow darken-2', id:16, value:'', disable:false}
      ],
      mainButtons: [
        { name: 'Buy', type: 'blue lighten-1', id:1},
        { name: 'Cover', type: 'green darken-1', id:3},
        { name: 'Sell', type: 'red darken-4', id:2 },
        { name: 'Short', type: 'yellow darken-2', id:4}
      ],
      quantityButtons: [
        { name: 'Buy', type: 'blue lighten-1', id:5, value:150},
        { name: 'Cover', type: 'green darken-1', id:6, value:250},
        { name: 'Sell', type: 'red darken-4', id:7, value:550},
        { name: 'Short', type: 'yellow darken-2', id:8, value:1500},
        { name: 'Buy', type: 'blue lighten-1', id:9, value:2500},
        { name: 'Cover', type: 'green darken-1', id:10, value:5500},
        { name: 'Sell', type: 'red darken-4', id:11, value:50000},
        { name: 'Short', type: 'yellow darken-2', id:12, value:''},
        { name: 'Buy', type: 'blue lighten-1', id:13, value:''},
        { name: 'Cover', type: 'green darken-1', id:14, value:''},
        { name: 'Sell', type: 'red darken-4', id:15, value:''},
        { name: 'Short', type: 'yellow darken-2', id:16, value:''}
      ],
      symbolButtons: [
        { symbol: 'AAPL', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.00', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
        { symbol: 'AMZN', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.00', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
        { symbol: 'BLK', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.01', quantity:2, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
        { symbol: 'FB', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.00', quantity:9, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
        { symbol: 'GOOGL', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.01', quantity:150, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
        { symbol: 'NXPI US EQUITY', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar',bps:'0.00', quantity:2, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
        { symbol: 'NXPI', bps:'0.00', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', quantity:100, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS' },
        { symbol: 'UL NA SWAP', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar', bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
        { symbol: 'VOO', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar',  bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
        { symbol: 'WMT', route:'EMSX', dest:'LP', time: Date.now(), user:'jon.withaar',  bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'}
      ]
		}
	}
}
