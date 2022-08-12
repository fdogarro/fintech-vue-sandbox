import _ from 'lodash';

let giantTableMock = require('./assets/mocks/giantTableMock.json')


export let randomizeBlotterMixin = {
	methods: {

		createRowData: () =>{
			let rowData = [];
			for(let i = 0; i < 1000; i++){
				rowData.push({
					twentyAdv: _.sample(["0.00%", "0.01%", "0.03%", "0.04%", "0.05%"]),
					pm: _.sample(["TMT1_LS", "HCR1_LS", "GSQL_LS"]),
					ticker: _.sample(["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"]),
					exp: Math.floor(Math.random() * 2000000),
					side: _.sample(["SHORT", "LONG"]),
					grossExp: Math.floor(Math.random() * 4000000 + 4500000),
					netExp: Math.floor(Math.random() * 4000000 + 4500000),
					threeWKBetaNetExp: Math.floor(Math.random() * 4000000 + 4500000),
					sixMDBetaNetExp: Math.floor(Math.random() * 4000000 + 4500000),
					twoYWBetaNetExp: Math.floor(Math.random() * 4000000 + 4500000),
					livePL: Math.floor(Math.random() * 4000000 + 4500000),
					longPL: Math.floor(Math.random() * 4000000 + 4500000),
					dayPNL: Math.floor(Math.random() * 4000000 + 4500000),
					perUO: Math.floor(Math.random() * 4000000 + 4500000),
					UO: Math.floor(Math.random() * 4000000 + 4500000)
				})
			}
			return rowData; 
		},
		mock10k: function() {
	        let sliceA = giantTableMock.slice(0, 2000)
	        let sliceB = giantTableMock.slice(2000, 4000)
	        let sliceC = giantTableMock.slice(4000, 6000)
	        let sliceD = giantTableMock.slice(6000, 8000)
	        let sliceE = giantTableMock.slice(8000, 10000)

	        let slices = [sliceA, sliceB, sliceC, sliceD, sliceE]
	        let newData = []

	        while (slices.length > 0) {
	          let randomNumber = Math.floor(Math.random() * slices.length)
	          let temp = slices.splice(randomNumber, 1)[0]
	          newData = newData.concat(temp)
	        }

	        console.log('10k data')
	        return newData
		},
		mock25k: function(){
			let newData = this.mock10k()
			newData = newData.concat(newData)
			newData = newData.concat(newData.slice(0, 5000))

	        console.log('25k data')
			return newData
		},
		mock50k: function(){
			let newData = this.mock10k()
	        let newestData = []

	       	for (var i = 0; i < 5; i++) {
	       		newestData = newestData.concat(newData)
	       	}

	        console.log('50k data')
	        return newestData
		},
		mock100k: function(){
			let newData = this.mock10k()
	        let newestData = []

	       	for (var i = 0; i < 10; i++) {
	       		newestData = newestData.concat(newData)
	       	}

	        console.log('100k data')
	        return newestData
		},
		mock250k: function(){
			let newData = this.mock100k()
			let halfData = this.mock50k()
	        let newestData = newData.concat(halfData.concat(newData))
	        console.log('250k data')
	        return newestData
		},
		mock500k: function(){
			let newData = this.mock100k()
	        let newestData = []

	       	for (var i = 0; i < 10; i++) {
	       		newestData = newestData.concat(newData)
	       	}

	        console.log('500k data')
	        return newestData
		}

	}
}
