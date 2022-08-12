import _ from 'lodash';

export let tradeDialogMixins = {
	data(){
		return{
			quantityButtons: [
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
	      { name: 'Buy', type: 'blue lighten-1', id:1, disable:false},
	      { name: 'Cover', type: 'green darken-1', id:3, disable:false},
	      { name: 'Sell', type: 'red darken-4', id:2, disable:false},
	      { name: 'Short', type: 'yellow darken-2', id:4 , disable:false}
	    ],
	    tradeActions:{
	       send:'Send <F9>',
	       clear:'Clear <Esc>'
	   },
     symbolButtons: [
       { symbol: 'AAPL', type:'info', bps:'0.00', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
       { symbol: 'INTC', type:'red', bps:'0.01', quantity:2, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
       { symbol: 'FB', type:'success', bps:'0.00', quantity:9, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
       { symbol: 'GOOG', type:'warning', bps:'0.01', quantity:150, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
       { symbol: 'NXPI US EQUITY', type:'warning', bps:'0.00', quantity:2, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS'},
       { symbol: 'NXPI', type:'warning', bps:'0.00', quantity:100, notional:1, orderType:'MKT', price:0, gtc:'no', isSwap:'yes', portfolio:'ASIA_FOCUS' },
       { symbol: 'UL NA SWAP', type:'warning', bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
       { symbol: 'UL NA SWAP', type:'warning', bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'},
       { symbol: 'UL NA SWAP', type:'warning', bps:'0.01', quantity:2, notional:1, orderType:'LMT', price:0, gtc:'no', isSwap:'no', portfolio:'ASIA_FOCUS'}
     ]
		}
	}
}
