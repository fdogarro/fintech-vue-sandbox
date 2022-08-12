import _ from 'lodash';
import EditGridCell from './edit-cell-grid-component.js';
import LockGridCell from './lock-cell-grid-component.js';
import SendTradeGridCell from './send-trade-grid-component.js';
import CancelGridCell from './cancel-cell-grid-component.js';

export let gridConfigMixins = {
	methods: {
		summaryColDef(){
 		 return[
 			 { headerName: 'Ticker',
 			 field: 'ticker',
 			 headerTooltip:'Ticker'
 			 // cellStyle: (params) => {
 				//  // console.log("Params", params);
 				//  let fontColor = _.sample(["red", "green", "white"]);
 				//  return { "color": fontColor}
 			 // }

 		 },
 			 { headerName: 'Day',
 			   field: 'day',
 				 headerTooltip:'Day'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }
 			 },
 			 { headerName: 'Current Qty',
 			 	 field: 'currentQty',
 				 headerTooltip:'Current Qty'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }
 			 },
 			 { headerName: 'Delta Exp',
 			 	 field: 'deltaExp',
 				 headerTooltip:'Delta Exp'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }
 			 },
 			 { headerName: '6Md BETA Exp',
 			   field: 'sixMdBeta',
 				 headerTooltip:'6Md BETA Exp'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }

 			 },
 			 { headerName: 'Long Exp',
 			   field: 'longExp',
				 headerTooltip:'Long Exp'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }
 			 },
 			 { headerName: 'Px Chg %',
 			   field: 'pxChgPercent',
 				 headerTooltip:'Px Chg %'
 				 // cellStyle: (params) => {
 					//  // console.log("Params", params);
 					//  let fontColor = _.sample(["red", "green", "white"]);
 					//  return { "color": fontColor}
 				 // }
 			 }
 		 ]
 	 },
	 summaryData(){
		 return[
			 {
				 "ticker":"AAPL",
				 "day":"2,534,400",
				 "currentQty": "30,000",
				 "deltaExp": "5,717,400",
				 "sixMdBeta": "5,717,400",
				 "longExp": "5,993,260",
				 "pxChgPercent": "1.39"
			 }
		 ]
	 },
		secondaryViewColDef(){
			return[
				{ headerName: 'Day',
					field: 'day',
					headerTooltip:'Day'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }

				},
				{ headerName: 'Live P/L',
					field: 'live p/l',
					headerTooltip:'live p/l'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: 'Long P/L',
					field: 'long p/l',
					headerTooltip:'long p/l'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
			 },
				{ headerName: 'Long & Chg',
					field: 'long % chg',
					headerTooltip:'long % chg'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: 'Exp USD',
					field: 'Exp USD',
					headerTooltip:'Exp USD'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: 'Exp Base CCY',
					field: 'Exp Base CCY',
					headerTooltip:'Exp Base CCY'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: 'Risk Ccy Exp',
					field: 'Risk Ccy Exp',
					headerTooltip:'Risk Ccy Exp'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: '6Md BETA Exp',
					field: '6Md BETA Exp',
					headerTooltip:'6Md BETA Exp'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ headerName: 'Admins SOD Px', field: 'Admins SOD Px', headerTooltip:'Admins SOD Px'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
			 },
				{ headerName: 'Last Px Base', field: 'Last Px Base', headerTooltip:'Last Px Base'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
			},
				{ headerName: 'Last USD', field: 'Last USD', headerTooltip:'Last USD'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
			},
				{ headerName: 'EndFX r2$', field: 'EndFX r2$', headerTooltip:'EndFX r2$'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
			},
				{ headerName: 'Base CCY', field: 'Base CCY', headerTooltip:'Base CCY'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
			},
				{ headerName: 'Risk CCY', field: 'Risk CCY', headerTooltip:'Risk CCY'},
				{ headerName: 'EndFx B2R', field: 'EndFx B2R', headerTooltip:'Risk CCY' },
				{ headerName: 'Px Chg', field: 'Px Chg' },
				{ headerName: 'Px Chg %', field: 'Px Chg %' },
				{ headerName: 'Cost Basis', field: 'Cost Basis' },
				{ headerName: 'Trade P/L', field: 'Trade P/L' },
				{ headerName: 'DayPnL', field: 'DayPnL' },
				{ headerName: 'U/O %', field: 'U/O %' },
				{ headerName: 'U/O $', field: 'U/O $' },
				{ headerName: 'P/L bps', field: 'P/L bps' },
				{ headerName: 'MTD P/L', field: 'MTD P/L' },
				{ headerName: 'YTD P/L', field: 'YTD P/L' },
				{ headerName: 'PM', field: 'PM' },
				{ headerName: 'Sub-strategy1', field: 'Sub-strategy1' },
				{ headerName: 'Sub-strategy2', field: 'Sub-strategy2' },
				{ headerName: 'Start Fx r2$ Admin', field: 'Start Fx r2$ Admin' },
				{ headerName: '6Md Beta', field: '6Md Beta' },
				{ headerName: 'Sector', field: 'Sector' },
				{ headerName: 'Industry Group', field: 'Industry Group' },
				{ headerName: 'Industry', field: 'Industry' },
				{ headerName: 'SubIndustry', field: 'SubIndustry' },
				{ headerName: 'Product', field: 'Product' },
				{ headerName: 'PMStrategy', field: 'PMStrategy' },
				{ headerName: 'Portfolio Target', field: 'Portfolio Target' },
				{ headerName: 'Live Price', field: 'Live Price' },
				{ headerName: 'Live DTD P/L', field: 'Live DTD P/L' },
				{ headerName: 'Max Premium', field: 'Max Premium' },
				{ headerName: '2Yw Beta', field: '2Yw Beta' },
				{ headerName: '2Yw BETA Exp', field: '2Yw BETA Exp' },
				{ headerName: 'ExDate', field: 'ExDate' },
				{ headerName: 'ExDate', field: 'Earning Date' },
				{ headerName: 'Pos.Exp', field: 'Pos.Exp' },
				{ headerName: 'Delta', field: 'Delta' },
				{ headerName: '3Wk Beta', field: '3Wk Beta' },
				{ headerName: '3Wk BETA Exp', field: '3Wk BETA Exp' },
				{ headerName: 'Security Name', field: 'Security Name' },
				{ headerName: 'Risk Country', field: 'Risk Country' },
				{ headerName: 'Mkt Cap', field: 'Mkt Cap' },
				{ headerName: 'Market Cap', field: 'Market Cap' },
				{ headerName: 'Gross Exp', field: 'Gross Exp' },
				{ headerName: '20d Adv%', field: '20d Adv%' }
			]
		},
		quickViewColDef(){
			return[
				{ headerName: 'Day',
				  field: 'day',
					headerTooltip:'Day',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}

				},
        { headerName: 'Live P/L',
				  field: 'livepl',
					headerTooltip:'live p/l',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
        { headerName: 'Long P/L',
				  field: 'longpl',
					headerTooltip:'long p/l',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
			 },
        { headerName: 'Long % Chg',
				  field: 'long % chg',
					headerTooltip:'long % chg',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
		{ headerName: 'Short P/L',
		  field: 'shortPL',
			headerTooltip:'Short P/L',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{ headerName: 'Short % Change',
		  field: 'shortChange',
			headerTooltip:'Short % Change',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
        { headerName: 'Long Exp',
		  field: 'longExp',
			headerTooltip:'Long Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{ headerName: 'Short Exp',
			  field: 'shortExp',
				headerTooltip:'Short Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
		},
		{ headerName: 'NET Exp',
			  field: 'netExp',
				headerTooltip:'Net Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
		},
		{ headerName: 'GROSS Exp',
			  field: 'grossExp',
				headerTooltip:'GROSS Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
		},
		{ headerName: '6Md BETA Long Exp',
				  field: '6Md BETA Long Exp',
					headerTooltip:'6Md BETA Long Exp',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
        { headerName: '6Md BETA Short Exp',
		  field: '6Md BETA Short Exp',
			headerTooltip:'6Md BETA Short Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{ headerName: '6Md BETA Net Exp',
		  field: '6Md BETA Net Exp',
			headerTooltip:'6Md BETA Net Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{ headerName: 'MTD',
		  field: 'mtd',
			headerTooltip:'MTD',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{ headerName: 'YTD',
		  field: 'ytd',
			headerTooltip:'YTD',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{
			headerName: '2Yw BETA Long Exp',
			field: '2Yw Beta Long Exp',
			headerTooltip:'2Yw Beta Long Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
    {
			headerName: '2Yw BETA Short Exp',
			field: '2Yw Beta Short Exp',
			headerTooltip:'2Yw Beta Short Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{
			headerName: '2Yw BETA NET Exp',
			field: '2Yw Beta Net Exp',
			headerTooltip:'2Yw Beta Net Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{
			headerName: '3Wk BETA Long Exp',
			field: '3Wk Beta Long Exp',
			headerTooltip:'3Wk Beta Long Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
    {
			headerName: '3Wk BETA Short Exp',
			field: '3Wk Beta Short Exp',
			headerTooltip:'3Wk Beta Short Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{
			headerName: '3Wk BETA NET Exp',
			field: '3Wk Beta Net Exp',
			headerTooltip:'3Wk Beta Net Exp',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		},
		{
			headerName: '% Return',
			field: '%Return',
			headerTooltip:'% Return',
			cellStyle: (params) => {
				// console.log("Params", params);
				let fontColor = _.sample(["red", "green", "white"]);
				return { "color": fontColor}
			}
		}]
		},
		portDetailsColDef(){
			return[
				{
					headerName: 'Side',
				  field: 'side',
					headerTooltip:'Side',
					rowGroup: true,
					hide:true
				},
				{
					headerName: 'SecName',
					field: 'secName',
					headerTooltip:'SecName'
				},
				{
					headerName: 'PM',
				  field: 'pm',
					headerTooltip:'PM'
				},
        { headerName: 'Exp',
				  field: 'exp',
					headerTooltip:'Exp'
				},
        { headerName: 'YTD P/L',
				  field: 'ytdPL',
					headerTooltip:'YTD p/l'
			 },
       {
				 headerName: 'Price Target',
				 field: 'priceTarget',
				 headerTooltip:'Price Target'
				},
				{
					headerName: 'Portfolio Target',
				  field: 'portfolioTarget',
					headerTooltip:'Portfolio Target'

				},
				{
					headerName: 'PM Strategy',
				  field: 'pmStrategy',
					headerTooltip:'PM Strategy'
				},
        {
					headerName: 'Price Alert',
		  		field: 'priceAlert',
					headerTooltip:'Price Alert'
				},
				{
					headerName: 'Position Comment',
			  	field: 'positionComment',
					headerTooltip:'Position Comment',
					width:600,
					editable:true
				}
			]
		},
		matrixColDef(){
			return[
				{
					headerName: 'Strategy',
				  field: 'strategy',
					headerTooltip:'Strategy',
					rowGroup: true,
					hide:true
				},
				{
					headerName: 'Portfolio',
					field: 'portfolio',
					headerTooltip:'Portfolio'
				},
				{
					headerName: 'Long',
				  field: 'long',
					headerTooltip:'Long'
				},
        { headerName: 'Short',
				  field: 'short',
					headerTooltip:'Short'
				}
			]
		},
		detailColDef(){
			return[
				{ headerName: 'Day',
				  field: 'day',
					headerTooltip:'Day'
				},
        { headerName: 'Live P/L',
				  field: 'livepl',
					headerTooltip:'live p/l'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
        { headerName: 'Long P/L',
				  field: 'longpl',
					headerTooltip:'long p/l'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
			 },
        { headerName: 'Long % Chg',
				  field: 'long % chg',
					headerTooltip:'long % chg'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
		{ headerName: 'Short P/L',
		  field: 'shortPL',
			headerTooltip:'Short P/L'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{ headerName: 'Short % Change',
		  field: 'shortChange',
			headerTooltip:'Short % Change'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
        { headerName: 'Long Exp',
		  field: 'longExp',
			headerTooltip:'Long Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{ headerName: 'Short Exp',
			  field: 'shortExp',
				headerTooltip:'Short Exp'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
		},
		{ headerName: 'NET Exp',
			  field: 'netExp',
				headerTooltip:'Net Exp'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
		},
		{ headerName: 'GROSS Exp',
			  field: 'grossExp',
				headerTooltip:'GROSS Exp'
				// cellStyle: (params) => {
				// 	// console.log("Params", params);
				// 	let fontColor = _.sample(["red", "green", "white"]);
				// 	return { "color": fontColor}
				// }
		},
		{ headerName: '6Md BETA Long Exp',
				  field: '6Md BETA Long Exp',
					headerTooltip:'6Md BETA Long Exp'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
        { headerName: '6Md BETA Short Exp',
		  field: '6Md BETA Short Exp',
			headerTooltip:'6Md BETA Short Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{ headerName: '6Md BETA Net Exp',
		  field: '6Md BETA Net Exp',
			headerTooltip:'6Md BETA Net Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{ headerName: 'MTD',
		  field: 'mtd',
			headerTooltip:'MTD'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{ headerName: 'YTD',
		  field: 'ytd',
			headerTooltip:'YTD'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{
			headerName: '2Yw BETA Long Exp',
			field: '2Yw Beta Long Exp',
			headerTooltip:'2Yw Beta Long Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
    {
			headerName: '2Yw BETA Short Exp',
			field: '2Yw Beta Short Exp',
			headerTooltip:'2Yw Beta Short Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{
			headerName: '2Yw BETA NET Exp',
			field: '2Yw Beta Net Exp',
			headerTooltip:'2Yw Beta Net Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{
			headerName: '3Wk BETA Long Exp',
			field: '3Wk Beta Long Exp',
			headerTooltip:'3Wk Beta Long Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
    {
			headerName: '3Wk BETA Short Exp',
			field: '3Wk Beta Short Exp',
			headerTooltip:'3Wk Beta Short Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{
			headerName: '3Wk BETA NET Exp',
			field: '3Wk Beta Net Exp',
			headerTooltip:'3Wk Beta Net Exp'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		},
		{
			headerName: '% Return',
			field: '%Return',
			headerTooltip:'% Return'
			// cellStyle: (params) => {
			// 	// console.log("Params", params);
			// 	let fontColor = _.sample(["red", "green", "white"]);
			// 	return { "color": fontColor}
			// }
		}]
		},
		allocGroupData(){
			return[
				{ parent: ['LP-FIXED INCOME'], strategy: '-574,602', subStrategy: '-624,703', currNav: '80,680,000',
				defRatio: '1', 'tradeRatio': '1',
				currPosition:'0', currExposure:'0', currBps:'0.00',
				currRatio:0, bps:0.00, targetBps:0.00, quantity:0,
				notional:0, prime:132673, newPosition:0, newExposure:0,
				newBps:0 },
				{ parent: ['LP-FIXED INCOME', 'MCOH_FI_CRDT'], strategy: '-574,602', subStrategy: '-624,703', currNav: '80,680,000',
				defRatio: '1', tradeRatio: '1',
				currPosition:'0', currExposure:'0', currBps:'0.00',
				currRatio:0, bps:0.00, targetBps:0.00, quantity:0,
				notional:0, prime:132673, newPosition:0, newExposure:0,
				newBps:0 },
				{ parent: ['LP-FIXED INCOME', 'MCOH_FI_CRDT', 'GOLDMAN SACHS'], strategy: '-574,602', subStrategy: '-624,703', currNav: '80,680,000',
				defRatio: '1', tradeRatio: '1',
				currPosition:'0', currExposure:'0', currBps:'0.00',
				currRatio:0, bps:0.00, targetBps:0.00, quantity:0,
				notional:0, prime:132673, newPosition:0, newExposure:0,
				newBps:0 }
			]
		},
		portfolioDetailMock(){
			return[
				{ orgHierarchy: ['LP-FIXED INCOME'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FIXED INCOME', 'MCOH_FI_CRDT'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%' },
        { orgHierarchy: ['LP-FUNDAMENTAL'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'GFOR_LS_TECH'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'TMT1_LS'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'NPAT_LS_INDU'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-QUANT'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-QUANT', 'QUANT3_LS'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-ARBITRAGE'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-ARBITRAGE', 'EVENT2_GA'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK', 'QUANT1_PX'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK', 'QUANT1_PX', 'QUANT2_PX'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-CAP'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-COMMODITIES'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-MARKET'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-SUBGROUP'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':'', 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'}
			]
		},
		portfolioDetMock(){
			return[
				{ 'side': 'Long', 'secName': '@CASHCAD', 'pm': 'ASIA_FOCUS', 'exp': '0', 'ytdPL': '5,036', 'priceTarget': '',
				'portfolioTarget':'', 'pmStrategy':'best', 'priceAlert':'', 'positionComment':''},
				{ 'side': 'Short', 'secName': '@CASHCAD', 'pm': 'ASIA_FOCUS', 'exp': '0', 'ytdPL': '-733', 'priceTarget': '',
				'portfolioTarget':'', 'pmStrategy':'1', 'priceAlert':'', 'positionComment':''},
				{ 'side': 'Long', 'secName': '@CASHUSD', 'pm': 'ASIA_FOCUS', 'exp': '0', 'ytdPL': '1,052', 'priceTarget': '',
				'portfolioTarget':'', 'pmStrategy':'best', 'priceAlert':'', 'positionComment':''}
			]
		},
		deskBlotterMock(){
			return[
				{ 'accept': 'Long', 'dest': '@CASHCAD', 'orderType': 'ASIA_FOCUS', 'route': 'EMSX', 'send': '5,036', 'amend': '',
				'time':'', 'user':'jon.withaar', 'type':'', 'symbol':'', 'portfolio':'', 'qty':'', 'lmt':''},
				{ 'accept': 'Long', 'dest': '@CASHCAD', 'orderType': 'ASIA_FOCUS', 'route': 'GS', 'send': '5,036', 'amend': '',
				'time':'', 'user':'jon.withaar', 'type':'', 'symbol':'', 'portfolio':'', 'qty':'', 'lmt':''},
				{ 'accept': 'Long', 'dest': '@CASHCAD', 'orderType': 'ASIA_FOCUS', 'route': 'MS', 'send': '5,036', 'amend': '',
				'time':'', 'user':'jon.withaar', 'type':'', 'symbol':'', 'portfolio':'', 'qty':'', 'lmt':''}
			]
		},
		matrixMock(){
			return[
				{ 'strategy': 'GARP', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'GARP', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Valuation', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Valuation', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Technical', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Technical', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Valuation', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Miscellaneous', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Miscellaneous', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Miscellaneous', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Quality', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Beta', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Beta', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Beta', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Beta', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Cash Deployment', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'},
				{ 'strategy': 'Growth', 'portfolio': '@CASHCAD', 'long': '-624,703', 'short': '77,726'}
			]
		},
		strategyMockData(){
			return[
				{ orgHierarchy: ['LP-FIXED INCOME'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FIXED INCOME', 'MCOH_FI_CRDT'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%' },
        { orgHierarchy: ['LP-FUNDAMENTAL'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'GFOR_LS_TECH'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'TMT1_LS'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-FUNDAMENTAL', 'NPAT_LS_INDU'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-QUANT'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-QUANT', 'QUANT3_LS'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-ARBITRAGE'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
        { orgHierarchy: ['LP-ARBITRAGE', 'EVENT2_GA'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
		'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK', 'QUANT1_PX'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-RISK', 'QUANT1_PX', 'QUANT2_PX'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-CAP'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-COMMODITIES'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-MARKET'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'},
				{ orgHierarchy: ['LP-SUBGROUP'], day: '-574,602', 'livepl': '-624,703', 'longpl': '77,726', 'long % chg': '-1.45%', 'shortPL': '6,585,867', 'shortChange':'25,767,699', 'longExp':'75,733,859', 'shortExp':149554850, 'netExp':46373393,
				'grossExp':8349220,  '6Md BETA Long Exp':5388911, '6Md BETA Short Exp':363892, '6Md BETA Net Exp':429442727, 'mtd':132673, 'ytd':132673, '2Yw Beta Long Exp':132673, '2Yw Beta Short Exp':132673, '2Yw Beta Net Exp':132673, '3Wk Beta Long Exp':132673, '3Wk Beta Short Exp':132673, '3Wk Beta Net Exp':132673, '%Return':'0.00%'}
			]
		},
		namedFields(){
			return[
				'side', 'ticker', 'securityType', 'baseCCY', 'riskCCY', 'adminSettleCCY', 'sector', 'industryGroup', 'industry'
			]
		},
		numberedFields(){
			return[
				'startQty', 'currentQty', 'expUSD', 'expBaseCcy', 'riskCCYExp', 'sixMdBetaExp', 'adminSODPx', 'lastPxBase', 'lastUSD',
				'endFXr', 'endFxB2R', 'pxChg', 'pxChgPercent', 'costBasis', 'tradePL', 'dayPNL', 'uOPercent', 'uo'
			]
		},
		positionsExample(){
			return[

				  {
				    "IntraDayPositionId": 23013874,
				    "BusDate": "00:00.0",
				    "Fund": "BRASIDAS",
				    "SecurityCode": "6460 JP",
				    "Quantity": 0,
				    "SODQuantity": 0,
				    "StrategyCode": "",
				    "SubStrategyCode": "",
				    "PortfolioCode": "BRASIDAS-ASIA_FOCUS",
				    "Currency": "JPY",
				    "StartPrice": 0,
				    "StartFx": 1,
				    "EndFx": 1,
				    "Price": 0,
				    "Exposure": 0,
				    "DayPnL": 0,
				    "MTDPnL": 0,
				    "YTDPnL": -36630.65003,
				    "LastModifiedBy": "ggtuser",
				    "LastModifiedOn": "18:33.8",
				    "Active": 1,
				    "PriceSymbol": "6460 JP Equity",
				    "Side": "",
				    "BetaExp": 0,
				    "TradePnL": 0,
				    "AvgCost": 0,
				    "Beta6M": 1,
				    "Delta": 1,
				    "Beta2Yw": 1,
				    "Beta2YwExp": 0,
				    "ExDate": "",
				    "ReportDate": "",
				    "RiskCountry": "Japan",
				    "Beta3Wk": 1,
				    "Beta3WkExp": 0,
				    "SecurityName": "Sega Sammy Holdings Inc",
				    "Undl_Price": 0,
				    "TypeId": 1,
				    "SettlePrice": 0
				  }
			]
		},
		positionsColDef(){
			return[
				{
					field: "Side",
					headerName:"Side",
					headerTooltip:'Side'
				},
				{
					field: "SecurityCode",
					headerName: "Ticker",
					headerTooltip:'Ticker'
				},
				{
					field: "Quantity",
					headerName: "Start Qty",
					headerTooltip:'Start Qty',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
				{
					field: "SODQuantity",
					headerName: "Current Qty",
					headerTooltip:'Current Qty',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
				{ field: "expUSD",
					headerName: "Exp USD",
					headerTooltip:'Exp USD',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }

				},
				{ field: "expBaseCcy",
				  headerName:"Exp Base CCY",
					headerTooltip:'Exp Base CCY',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{ field: "riskCCYExp",
				  headerName: "Risk CCY Exp",
					headerTooltip:'Risk CCY Exp',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{ field: "sixMdBetaExp",
					headerName:'6Md BETA Exp',
					headerTooltip:'6Md BETA Exp',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
			 },
				{ field: "adminSODPx",
					headerName:'Admin SOD Px',
				  headerTooltip:'Admin SOD Px',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{
					field: "lastPxBase",
				 	headerTooltip:'Last Px Base',
					headerName:'Last Px Base',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{ field: "securityType",
				  headerName: "Security Type",
					headerTooltip:'Security Type',
					width:175
					// cellStyle: (params) => {
	 				//  // console.log("Params", params);
	 				//  let fontColor = _.sample(["red", "green", "white"]);
	 				//  return { "color": fontColor}
	 			 // }
				},
				{field: "lastUSD",
				 headerName:"Last USD",
				 headerTooltip:'Last USD',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{field: "endFXr",
				 headerName: "EndFX r2$",
				 headerTooltip:'EndFX r2$',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{field: "baseCCY",
				 headerName: "Base CCY",
				 headerTooltip:'Base CCY'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 {field: "RiskCountry",
				headerName: "Risk CCY",
				headerTooltip:'Risk CCY'
				// cellStyle: (params) => {
 				//  // console.log("Params", params);
 				//  let fontColor = _.sample(["red", "green", "white"]);
 				//  return { "color": fontColor}
			  // }
 			 },
			 {
				 field: "adminSettleCCY",
				headerName: "Admin Settle CCY",
				headerTooltip:'Admin Settle CCY'
				// cellStyle: (params) => {
 				//  // console.log("Params", params);
 				//  let fontColor = _.sample(["red", "green", "white"]);
 				//  return { "color": fontColor}
 			 // }
		 },
			 {
				 field: "endFxB2R",
				headerName: "EndFx B2R",
				headerTooltip:'EndFx B2R',
				cellStyle: (params) => {
 				 // console.log("Params", params);
 				 let fontColor = _.sample(["red", "green", "white"]);
 				 return { "color": fontColor}
 			 }
		 },
		 {
			 field: "pxChg",
			headerName: "Px Chg",
			headerTooltip:'Px Chg',
			cellStyle: (params) => {
			 // console.log("Params", params);
			 let fontColor = _.sample(["red", "green", "white"]);
			 return { "color": fontColor}
		 }
	 },
	 {
		 field: "pxChgPercent",
		headerName: "Px Chg %",
		headerTooltip:'Px Chg %',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
 	},
	 {
		 field: "costBasis",
		headerName: "Cost Basis",
		headerTooltip:'Cost Basis',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
	},
	{
		field: "tradePL",
	 headerName: "Trade P/L",
	 headerTooltip:'Trade P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
 },
	 {
		 field: "dayPNL",
		headerName: "DayPnL",
		headerTooltip:'DayPnL',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
	},
	{
		field: "uOPercent",
	 headerName: "U/O %",
	 headerTooltip:'U/O %',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "uo",
	 headerName: "U/O $",
	 headerTooltip:'U/O $',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "plBPS",
	 headerName: "P/L bps",
	 headerTooltip:'P/L bps',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "mtdPL",
	 headerName: "MTD P/L",
	 headerTooltip:'MTD P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "ytdPL",
	 headerName: "YTD P/L",
	 headerTooltip:'YTD P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "pm",
	 headerName: "PM",
	 headerTooltip:'PM'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subStrategyOne",
	 headerName: "Sub-strategy1",
	 headerTooltip:'Sub-strategy1'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subStrategyTwo",
	 headerName: "Sub-strategy2",
	 headerTooltip:'Sub-strategy2'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "startFxr2Admin",
	 headerName: "Start Fx r2$ Admin",
	 headerTooltip:'Start Fx r2$ Admin',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "sixMdBeta",
	 headerName: "6Md Beta",
	 headerTooltip:'6Md Beta',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "sector",
	 headerName: "Sector",
	 headerTooltip:'Sector',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "industryGroup",
	 headerName: "Industry Group",
	 headerTooltip:'Industry Group',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "industry",
	 headerName: "Industry",
	 headerTooltip:'Industry',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subIndustry",
	 headerName: "SubIndustry",
	 headerTooltip:'SubIndustry',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "product",
	 headerName: "Product",
	 headerTooltip:'Product'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "pMStrategy",
	 headerName: "PM Strategy",
	 headerTooltip:'PM Strategy'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "portfolioTarget",
	 headerName: "Portfolio Target",
	 headerTooltip:'Portfolio Target'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "livePrice",
	 headerName: "Live Price",
	 headerTooltip:'Live Price'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "liveDTDPL",
	 headerName: "Live DTD P/L",
	 headerTooltip:'Live DTD P/L'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "maxPremium",
	 headerName: "Max Premium",
	 headerTooltip:'Max Premium'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twoYWBeta",
	 headerName: "2Yw Beta",
	 headerTooltip:'2Yw Beta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twoYWBetaExp",
	 headerName: "2Yw Beta Exp",
	 headerTooltip:'2Yw Beta Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "exDate",
	 headerName: "ExDate",
	 headerTooltip:'ExDate'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "earningDate",
	 headerName: "Earning Date",
	 headerTooltip:'Earning Date'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "posExp",
	 headerName: "Pos.Exp",
	 headerTooltip:'Pos.Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "delta",
	 headerName: "Delta",
	 headerTooltip:'Delta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "threeWkBeta",
	 headerName: "3Wk Beta",
	 headerTooltip:'3Wk Beta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "threeWkBetaExp",
	 headerName: "3Wk Beta Exp",
	 headerTooltip:'3Wk Beta Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "securityName",
	 headerName: "Security Name",
	 headerTooltip:'Security Name'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "riskCountry",
	 headerName: "Risk Country",
	 headerTooltip:'Risk Country'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCap",
	 headerName: "Mkt Cap",
	 headerTooltip:'Mkt Cap'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCapLocal",
	 headerName: "Mkt Cap Local",
	 headerTooltip:'Mkt Cap Local'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCapUSD",
	 headerName: "Mkt Cap USD",
	 headerTooltip:'Mkt Cap USD'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "grossExp",
	 headerName: "Gross Exp",
	 headerTooltip:'Gross Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twentyAdvPercent",
	 headerName: "20d Adv%",
	 headerTooltip:'20d Adv%'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},

			]
		},
		positionsColDefDup(){
			return[
				{
					field: "Side",
					headerName:"Side",
					headerTooltip:'Side'
				},
				{
					field: "ticker",
					headerName: "Ticker",
					headerTooltip:'Ticker'
				},
				{
					field: "startQty",
					headerName: "Start Qty",
					headerTooltip:'Start Qty',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
				{
					field: "currentQty",
					headerName: "Current Qty",
					headerTooltip:'Current Qty',
					cellStyle: (params) => {
						// console.log("Params", params);
						let fontColor = _.sample(["red", "green", "white"]);
						return { "color": fontColor}
					}
				},
				{ field: "expUSD",
					headerName: "Exp USD",
					headerTooltip:'Exp USD',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }

				},
				{ field: "expBaseCcy",
				  headerName:"Exp Base CCY",
					headerTooltip:'Exp Base CCY',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{ field: "riskCCYExp",
				  headerName: "Risk CCY Exp",
					headerTooltip:'Risk CCY Exp',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{ field: "sixMdBetaExp",
					headerName:'6Md BETA Exp',
					headerTooltip:'6Md BETA Exp',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
			 },
				{ field: "adminSODPx",
					headerName:'Admin SOD Px',
				  headerTooltip:'Admin SOD Px',
					cellStyle: (params) => {
	 				 // console.log("Params", params);
	 				 let fontColor = _.sample(["red", "green", "white"]);
	 				 return { "color": fontColor}
	 			 }
				},
				{
					field: "lastPxBase",
				 	headerTooltip:'Last Px Base',
					headerName:'Last Px Base',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{ field: "securityType",
				  headerName: "Security Type",
					headerTooltip:'Security Type',
					width:175
					// cellStyle: (params) => {
	 				//  // console.log("Params", params);
	 				//  let fontColor = _.sample(["red", "green", "white"]);
	 				//  return { "color": fontColor}
	 			 // }
				},
				{field: "lastUSD",
				 headerName:"Last USD",
				 headerTooltip:'Last USD',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{field: "endFXr",
				 headerName: "EndFX r2$",
				 headerTooltip:'EndFX r2$',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }
			 },
				{field: "baseCCY",
				 headerName: "Base CCY",
				 headerTooltip:'Base CCY'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 {field: "riskCCY",
				headerName: "Risk CCY",
				headerTooltip:'Risk CCY'
				// cellStyle: (params) => {
 				//  // console.log("Params", params);
 				//  let fontColor = _.sample(["red", "green", "white"]);
 				//  return { "color": fontColor}
			  // }
 			 },
			 {
				 field: "adminSettleCCY",
				headerName: "Admin Settle CCY",
				headerTooltip:'Admin Settle CCY'
				// cellStyle: (params) => {
 				//  // console.log("Params", params);
 				//  let fontColor = _.sample(["red", "green", "white"]);
 				//  return { "color": fontColor}
 			 // }
		 },
			 {
				 field: "endFxB2R",
				headerName: "EndFx B2R",
				headerTooltip:'EndFx B2R',
				cellStyle: (params) => {
 				 // console.log("Params", params);
 				 let fontColor = _.sample(["red", "green", "white"]);
 				 return { "color": fontColor}
 			 }
		 },
		 {
			 field: "pxChg",
			headerName: "Px Chg",
			headerTooltip:'Px Chg',
			cellStyle: (params) => {
			 // console.log("Params", params);
			 let fontColor = _.sample(["red", "green", "white"]);
			 return { "color": fontColor}
		 }
	 },
	 {
		 field: "pxChgPercent",
		headerName: "Px Chg %",
		headerTooltip:'Px Chg %',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
 	},
	 {
		 field: "costBasis",
		headerName: "Cost Basis",
		headerTooltip:'Cost Basis',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
	},
	{
		field: "tradePL",
	 headerName: "Trade P/L",
	 headerTooltip:'Trade P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
 },
	 {
		 field: "dayPNL",
		headerName: "DayPnL",
		headerTooltip:'DayPnL',
		cellStyle: (params) => {
		 // console.log("Params", params);
		 let fontColor = _.sample(["red", "green", "white"]);
		 return { "color": fontColor}
	 }
	},
	{
		field: "uOPercent",
	 headerName: "U/O %",
	 headerTooltip:'U/O %',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "uo",
	 headerName: "U/O $",
	 headerTooltip:'U/O $',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "plBPS",
	 headerName: "P/L bps",
	 headerTooltip:'P/L bps',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "mtdPL",
	 headerName: "MTD P/L",
	 headerTooltip:'MTD P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "ytdPL",
	 headerName: "YTD P/L",
	 headerTooltip:'YTD P/L',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "pm",
	 headerName: "PM",
	 headerTooltip:'PM'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subStrategyOne",
	 headerName: "Sub-strategy1",
	 headerTooltip:'Sub-strategy1'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subStrategyTwo",
	 headerName: "Sub-strategy2",
	 headerTooltip:'Sub-strategy2'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "startFxr2Admin",
	 headerName: "Start Fx r2$ Admin",
	 headerTooltip:'Start Fx r2$ Admin',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "sixMdBeta",
	 headerName: "6Md Beta",
	 headerTooltip:'6Md Beta',
	 cellStyle: (params) => {
		// console.log("Params", params);
		let fontColor = _.sample(["red", "green", "white"]);
		return { "color": fontColor}
	}
	},
	{
		field: "sector",
	 headerName: "Sector",
	 headerTooltip:'Sector',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "industryGroup",
	 headerName: "Industry Group",
	 headerTooltip:'Industry Group',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "industry",
	 headerName: "Industry",
	 headerTooltip:'Industry',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "subIndustry",
	 headerName: "SubIndustry",
	 headerTooltip:'SubIndustry',
	 width:250
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "product",
	 headerName: "Product",
	 headerTooltip:'Product'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "pMStrategy",
	 headerName: "PM Strategy",
	 headerTooltip:'PM Strategy'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "portfolioTarget",
	 headerName: "Portfolio Target",
	 headerTooltip:'Portfolio Target'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "livePrice",
	 headerName: "Live Price",
	 headerTooltip:'Live Price'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "liveDTDPL",
	 headerName: "Live DTD P/L",
	 headerTooltip:'Live DTD P/L'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "maxPremium",
	 headerName: "Max Premium",
	 headerTooltip:'Max Premium'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twoYWBeta",
	 headerName: "2Yw Beta",
	 headerTooltip:'2Yw Beta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twoYWBetaExp",
	 headerName: "2Yw Beta Exp",
	 headerTooltip:'2Yw Beta Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "exDate",
	 headerName: "ExDate",
	 headerTooltip:'ExDate'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "earningDate",
	 headerName: "Earning Date",
	 headerTooltip:'Earning Date'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "posExp",
	 headerName: "Pos.Exp",
	 headerTooltip:'Pos.Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "delta",
	 headerName: "Delta",
	 headerTooltip:'Delta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "threeWkBeta",
	 headerName: "3Wk Beta",
	 headerTooltip:'3Wk Beta'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "threeWkBetaExp",
	 headerName: "3Wk Beta Exp",
	 headerTooltip:'3Wk Beta Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "securityName",
	 headerName: "Security Name",
	 headerTooltip:'Security Name'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "riskCountry",
	 headerName: "Risk Country",
	 headerTooltip:'Risk Country'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCap",
	 headerName: "Mkt Cap",
	 headerTooltip:'Mkt Cap'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCapLocal",
	 headerName: "Mkt Cap Local",
	 headerTooltip:'Mkt Cap Local'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "mktCapUSD",
	 headerName: "Mkt Cap USD",
	 headerTooltip:'Mkt Cap USD'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "grossExp",
	 headerName: "Gross Exp",
	 headerTooltip:'Gross Exp'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},
	{
		field: "twentyAdvPercent",
	 headerName: "20d Adv%",
	 headerTooltip:'20d Adv%'
	//  cellStyle: (params) => {
	// 	// console.log("Params", params);
	// 	let fontColor = _.sample(["red", "green", "white"]);
	// 	return { "color": fontColor}
	// }
	},

			]
		},
		secondColDef(){
			return[
				{field: "pm", headerName:"PM", editable:true, headerTooltip:'PM'},
				{
					field: "dayPNL",
					headerName: "Day PnL",
					headerTooltip:'Day PnL'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{
					field: "perUO",
					headerName: "U/O%",
					headerTooltip:'U/O%'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{
					field: "UO",
					headerName: "U/O$",
					headerTooltip:'U/O$'
					// cellStyle: (params) => {
					// 	// console.log("Params", params);
					// 	let fontColor = _.sample(["red", "green", "white"]);
					// 	return { "color": fontColor}
					// }
				},
				{ field: "side",
					headerTooltip:'Side'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

				},
				{ field: "ticker",
					headerName:"Ticker",
					headerTooltip:'Ticker'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
				},
				{ field: "twentyAdv",
					headerName: "20d Adv%",
					headerTooltip:'20d Adv%'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
				},
				{ field: "exp",
					editable: true,
					headerTooltip:'Exp'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
				{ field: "grossExp",
					headerTooltip:'Gross Exp'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
				},
				{field: "netExp",
				 headerTooltip:'Net Exp'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
				{ field: "threeWKBetaNetExp",
					headerName: "3wkBetaNetExp",
					headerTooltip:'3wkBetaNetExp'
					// cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
				},
				{field: "sixMDBetaNetExp",
				 headerName:"6mdBetaNetExp",
				 headerTooltip:'6mdBetaNetExp'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
				{field: "twoYWBetaNetExp",
				 headerName: "2YwBetaNetExp",
				 headerTooltip:'2YwBetaNetExp'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
				{field: "livePL",
				 headerName: "liveP/L",
				 headerTooltip:'Live P/L'
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
				{field: "longPL",
				headerName: "longP/L",
				headerTooltip:'Long P/L'
				// cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
			}
			]
		},
		createColumnDefs() {
			return [
			 { headerName: 'Account', field: 'account'},
			 { headerName: 'Trader', field: 'trader'},
			 { headerName: 'Strategy', field: 'strategy'},
			 { headerName: 'Counterparty', field: 'counterparty'},
			 { headerName: 'CID', field: 'cid' },
			 { headerName: 'Ticker', field: 'ticker' },
			 { headerName: 'RIC', field: 'ric' },
			 { headerName: 'BBG', field: 'bbg' },
			 { headerName: 'Type', field: 'type' },
			 { headerName: 'Order ID', field: 'orderId' },
			 { headerName: 'Quantity', field: 'quantity' },
			 { headerName: 'Price', field: 'price' },
			 { headerName: 'Filled', field: 'filled' },
			 { headerName: 'Open', field: 'open' },
			 { headerName: 'Limit Price', field: 'limitPrice' },
			 { headerName: 'Filled Price', field: 'filledPrice' },
			 { headerName: 'Venue', field: 'venue' },
			 { headerName: 'Gateway', field: 'gateway' },
			 { headerName: 'Currency', field: 'currency' },
			 { headerName: 'Side', field: 'side' },
			 { headerName: 'Original Order ID', field: 'originalOrderId' },
			 { headerName: 'Rejected', field: 'rejected' },
			 { headerName: 'Rejected Reason', field: 'rejectedReason' },
			 { headerName: 'State', field: 'state' },
			 { headerName: 'Entry Method', field: 'entryMethod' },
			 { headerName: 'Transact Time', field: 'transactTime' },
			 { headerName: 'Placement Time', field: 'placementTime' },
			 { headerName: 'Ems Time', field: 'emsTime' }
		 ]
	 },
	 chartingData(){
		 return[
			 { "day":"PM"},
			 { "day":"Day"},
			 {"day": "TBD"}
		 ]
	 },
	 chartTypeData(){
		 return[
			 { "day":"scatter"},
			 { "day":"bar"},
			 {"day": "scatter"},
			 {"day": "pie"}
		 ]
	 },
	 fundMockData(){
		 return[
			 { "day":"-653,477",
				 "livePL":"1,052,654",
				 "longPL":"3,406,759",
				 "shortPL":"470,797",
				 "Short % Chg":"1,163,374",
				 "Long Exp":"71,127,469",
				 "Short Exp":"12,239,295",
				 "NET Exp":"-7,347,847",
				 "GROSS Exp":"4,891,448",
				 "6Md BETA Long Exp":"19,587,142",
				 "6Md BETA Short Exp":"6,708,858",
				 "6Md BETA NET Exp":"-21,483,017",
				 "MTD":"4,884,784",
				 "YTD":"999,785",
				 "2Yw BETA Long Exp":"8,714,522",
				 "2Yw BETA Short Exp":"-16,893,707",
				 "2Yw BETA NET Exp":"-8,179,185",
				 "3Wk BETA Long Exp":"4,846,137",
				 "3Wk BETA Short Exp":"-20,526,644",
				 "3Wk BETA NET Exp":"-15,680,507",
				 "% Return":"0.00%"
			 }
		 ]
	 },
	 fundColDef(){
		 return[
			 {
				 headerName: 'Day',
				 field: 'day',
				 menuTabs: [],
				 headerTooltip:'Day',
				 cellStyle: (params) => {
					 // console.log("Params", params);
					 let fontColor = _.sample(["red", "green", "white"]);
					 return { "color": fontColor}
				 }

		 	},
			{ headerName: 'Short P/L',
				field: 'shortPL',
				headerTooltip:'Short P/L',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'Long P/L',
				field: 'longPL',
				headerTooltip:'Long P/L',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'NET Exp',
			  field: 'NET Exp',
			  headerTooltip:'NET Exp',
			  menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'Long Exp',
			  field: 'Long Exp',
			  headerTooltip:'Long Exp',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'Short Exp',
			  field: 'Short Exp',
			  headerTooltip:'Short Exp',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'Gross Exp',
			  field: 'GROSS Exp',
			  headerTooltip:'Gross Exp',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'MTD',
			  field: 'MTD',
				menuTabs: [],
				headerTooltip:'MTD',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: 'YTD',
			  field: 'YTD',
				menuTabs: [],
				headerTooltip:'YTD',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: '6Md BETA Long Exp',
			  field: '6Md BETA Long Exp',
				menuTabs: [],
				headerTooltip:'6Md BETA Long Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: '6Md BETA Short Exp',
			  field: '6Md BETA Short Exp',
			  headerTooltip:'6Md BETA Short Exp',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{ headerName: '6Md BETA NET Exp',
			  field: '6Md BETA NET Exp',
			  headerTooltip:'6Md BETA NET Exp',
				menuTabs: [],
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{
				headerName: '2Yw BETA Long Exp',
			  field: '2Yw BETA Long Exp',
				menuTabs: [],
				headerTooltip:'2Yw BETA Long Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}

			},
			{
				headerName: '2Yw BETA Short Exp',
				field: '2Yw BETA Short Exp',
				menuTabs: [],
				headerTooltip:'2Yw BETA Short Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{
				headerName: '2Yw BETA NET Exp',
				field: '2Yw BETA NET Exp',
				menuTabs: [],
				headerTooltip:'2Yw BETA NET Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{
				headerName: '3Wk BETA Long Exp',
				field: '3Wk BETA Long Exp',
				menuTabs: [],
				headerTooltip:'3Wk BETA Long Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{
				headerName: '3Wk BETA Short Exp',
				field: '3Wk BETA Short Exp',
				menuTabs: [],
				headerTooltip:'3Wk BETA Short Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			},
			{
				headerName: '3Wk BETA NET Exp',
				field: '3Wk BETA NET Exp',
				menuTabs: [],
				headerTooltip:'3Wk BETA NET Exp',
				cellStyle: (params) => {
					// console.log("Params", params);
					let fontColor = _.sample(["red", "green", "white"]);
					return { "color": fontColor}
				}
			}
		 ]
	 },
	 shortColDef(){
		 return[
			 { headerName: 'Day',
			 field: 'day',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 },
			 { headerName: 'Live P/L',
			   field: 'livePL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Long P/L',
			 	 field: 'longPL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short P/L',
			 	 field: 'shortPL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short % Chg',
			   field: 'Short % Chg',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

			 },
			 { headerName: 'Long Exp',
			   field: 'Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short Exp',
			   field: 'Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'NET Exp',
			   field: 'NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'GROSS Exp',
			   field: 'GROSS Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA Long Exp',
			   field: '6Md BETA Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA Short Exp',
			   field: '6Md BETA Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA NET Exp',
			   field: '6Md BETA NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'MTD',
			   field: 'MTD',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'YTD',
			   field: 'YTD',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '2Yw BETA Long Exp', field: '2Yw BETA Long Exp', menuTabs: []},
			 { headerName: '2Yw BETA Short Exp', field: '2Yw BETA Short Exp', menuTabs: [] },
			 { headerName: '2Yw BETA NET Exp', field: '2Yw BETA NET Exp', menuTabs: []},
			 { headerName: '3Wk BETA Long Exp', field: '3Wk BETA Long Exp', menuTabs: [] },
			 { headerName: '3Wk BETA Short Exp', field: '3Wk BETA Short Exp', menuTabs: [] },
			 { headerName: '3Wk BETA NET Exp', field: '3Wk BETA NET Exp', menuTabs: [] },
			 { headerName: '% Return', field: '% Return', menuTabs: [] },
		 ]
	 },
	 allocColDef(){
		 return[
		{
			 headerName: 'Portfolio Group',
			 field: 'day',
			 menuTabs: [],
			 width:175
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 },
			 { headerName: 'Curr NAV',
			   field: 'livePL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Def Ratio',
			 	 field: 'longPL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Trade Ratio',
			 	 field: 'shortPL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Position',
			   field: 'Short % Chg',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

			 },
			 { headerName: 'Curr Exposure',
			   field: 'Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Bps',
			   field: 'Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Ratio',
			   field: 'NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Bps',
			   field: 'GROSS Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Target Bps',
			   field: '6Md BETA Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Quantity',
			   field: '6Md BETA Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Notional',
			   field: '6Md BETA NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Prime',
			   field: 'MTD',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'New Position',
			   field: 'YTD',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'New Exposure', field: '2Yw BETA Long Exp', menuTabs: []},
			 { headerName: 'New Bps', field: '2Yw BETA Short Exp', menuTabs: [] },
			 { headerName: '2Yw BETA NET Exp', field: '2Yw BETA NET Exp', menuTabs: []},
			 { headerName: '3Wk BETA Long Exp', field: '3Wk BETA Long Exp', menuTabs: [] },
			 { headerName: '3Wk BETA Short Exp', field: '3Wk BETA Short Exp', menuTabs: [] },
			 { headerName: '3Wk BETA NET Exp', field: '3Wk BETA NET Exp', menuTabs: [] },
			 { headerName: '% Return', field: '% Return', menuTabs: [] },
		 ]
	 },
	 chartingColDef(){
		 return[
		{
			 headerName: 'Position Column',
			 field: 'chartData',
			 menuTabs: [],
			 width:175
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 }
		 ]
	 },
	 chartTypeColDef(){
		 return[
		{
			 headerName: 'Select a Chart Type',
			 field: 'day',
			 menuTabs: [],
			 width:175
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 }
		 ]
	 },
	 allocGroupColDef(){
		 return[
			 { headerName: 'Strategy',
			   field: 'strategy',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'SubStrategy',
			 	 field: 'subStrategy',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr NAV',
			 	 field: 'currNav',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Def Ratio',
			   field: 'defRatio',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

			 },
			 { headerName: 'Trade Ratio',
			   field: 'tradeRatio',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Position',
			   field: 'currPosition',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Exposure',
			   field: 'currExposure',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Bps',
			   field: 'currBps',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Curr Ratio',
			   field: 'currRatio',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Bps',
			   field: 'bps',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Target Bps',
			   field: 'targetBps',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Quantity',
			   field: 'quantity',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Notional',
			   field: 'notional',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Prime', field: 'prime', menuTabs: []},
			 { headerName: 'New Position', field: 'newPosition', menuTabs: [] },
			 { headerName: 'New Exposure', field: 'newExposure', menuTabs: []},
			 { headerName: 'New Bps', field: 'newBps', menuTabs: [] }
		 ]
	 },
	 pmColDef(){
		 return[
			 {
			 headerName: 'BPS',
			 field: 'bps',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 },
			 { headerName: 'GTC',
			   field: 'gtc',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Order Type',
			 	 field: 'orderType',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short P/L',
			 	 field: 'shortPL',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short % Chg',
			   field: 'Short % Chg',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

			 },
			 { headerName: 'Long Exp',
			   field: 'Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Short Exp',
			   field: 'Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'NET Exp',
			   field: 'NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'GROSS Exp',
			   field: 'GROSS Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA Long Exp',
			   field: '6Md BETA Long Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA Short Exp',
			   field: '6Md BETA Short Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: '6Md BETA NET Exp',
			   field: '6Md BETA NET Exp',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'MTD',
			   field: 'MTD',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 }
		 ]
	 },
	 deskBlotterColDef(){
		return[
			{
			headerName: 'Accept',
			field: 'accept',
			menuTabs: [],
			cellRendererFramework:LockGridCell
			// cellStyle: (params) => {
			 //  // console.log("Params", params);
			 //  let fontColor = _.sample(["red", "green", "white"]);
			 //  return { "color": fontColor}
			// }

		},
			{ headerName: 'Send',
				field: 'send',
				menuTabs: [],
				cellRendererFramework:SendTradeGridCell
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Amend',
				field: 'amend',
				menuTabs: [],
				width:125,
				cellRendererFramework:EditGridCell
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Dest',
				field: 'dest',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Route',
				field: 'route',
				menuTabs: [],
				editable:true,
				cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
            values: ['EMSX', 'GS', 'MS']
        }
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }

			},
			{ headerName: 'Time',
				field: 'time',
				menuTabs: [],
				cellStyle: { backgroundColor: "red"},
				width: 70
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'User',
				field: 'user',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Portfolio',
				field: 'portfolio',
				menuTabs: [],
				width: 125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Type',
				field: 'type',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Qty',
				field: 'quantity',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Lmt',
				field: 'lmt',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Arvl',
				field: 'arvl',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Last',
				field: 'last',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Cust',
			 field: 'cust',
			 menuTabs: [],
			 editable:true,
			 cellEditor: 'agRichSelectCellEditor',
			 cellEditorParams: {
					 values: ['EMSX', 'GS', 'MS']
			 }
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Cancel',
			 field: 'cancel',
			 menuTabs: [],
			 cellRendererFramework:CancelGridCell
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Notional',
			 field: 'notional',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'A',
			 field: 'amended'
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Allo',
			 field: 'allo',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Mgr',
			 field: 'mgr',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Entry Time',
			 field: 'entryTime',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Arvl Vol',
			 field: 'arvlVol',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Last Vol',
			 field: 'lastVol',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Priority',
			 field: 'priority',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Original Qty',
			 field: 'originalQTY',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Original Price',
			 field: 'originalPrice',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Original Type',
			 field: 'originalType',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 },
		 { headerName: 'Symbol',
			 field: 'symbol',
			 menuTabs: [],
			 width:125
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }
		 }
		]
	},
	 pMBlotterColDef(){
		 return[
			 {
			 headerName: 'Accept',
			 field: 'accept',
			 menuTabs: []
			 // cellStyle: (params) => {
				//  // console.log("Params", params);
				//  let fontColor = _.sample(["red", "green", "white"]);
				//  return { "color": fontColor}
			 // }

		 },
			 { headerName: 'Dest',
				 field: 'dest',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Order Type',
				 field: 'orderType',
				 menuTabs: [],
				 width:125
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Route',
				 field: 'route',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Send',
				 field: 'send',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }

			 },
			 { headerName: 'Amend',
				 field: 'amend',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Time',
				 field: 'time',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'User',
				 field: 'user',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Type',
				 field: 'type',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Term',
				 field: 'term',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Symbol',
				 field: 'symbol',
				 menuTabs: [],
				 width:125
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Portfolio',
				 field: 'portfolio',
				 menuTabs: [],
				 width:125
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Qty',
				 field: 'quantity',
				 menuTabs: []
				 // cellStyle: (params) => {
					//  // console.log("Params", params);
					//  let fontColor = _.sample(["red", "green", "white"]);
					//  return { "color": fontColor}
				 // }
			 },
			 { headerName: 'Lmt',
				field: 'lmt',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Arvl',
				field: 'arvl',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Last',
				field: 'last',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Instructions',
				field: 'instructions',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Spl Inst',
				field: 'splInst',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Cust',
				field: 'cust',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Cancel',
				field: 'cancel',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Cancel',
				field: 'cancel',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Notional',
				field: 'notional',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'A',
				field: 'a',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Allo',
				field: 'allo',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Mgr',
				field: 'mgr',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Entry Time',
				field: 'entryTime',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Arvl Vol',
				field: 'arvlVol',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Last Vol',
				field: 'lastUSDVol',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Priority',
				field: 'priority',
				menuTabs: []
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Original Qty',
				field: 'originalQty',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Original Price',
				field: 'originalPrice',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			},
			{ headerName: 'Original Type',
				field: 'originalType',
				menuTabs: [],
				width:125
				// cellStyle: (params) => {
				 //  // console.log("Params", params);
				 //  let fontColor = _.sample(["red", "green", "white"]);
				 //  return { "color": fontColor}
				// }
			}
		 ]
	 }


	}
}
