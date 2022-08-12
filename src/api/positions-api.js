import _ from 'lodash';

export default {
  createRowData: () =>{
    let rowData = [];
    for(let i = 0; i < 1000; i++){
      rowData.push({
        side: _.sample(["SHORT", "LONG"]),
        ticker: _.sample(["@CASHAUD", "@CASHCAD", "@CASHEUR", "@CASHGBP", "@CASHHKD", "@CASHJPY", "@CASHNZD", "@CASHSGD"]),
        startQty: Math.floor(Math.random() * 4000000 + 4500000),
        currentQty: Math.floor(Math.random() * 4000000 + 4500000),
        expUSD: Math.floor(Math.random() * 4000000 + 4500000),
        expBaseCcy: Math.floor(Math.random() * 4000000 + 4500000),
        riskCCYExp: Math.floor(Math.random() * 4000000 + 4500000),
        sixMdBetaExp: Math.floor(Math.random() * 4000000 + 4500000),
        adminSODPx: Math.floor(Math.random() * 4000000 + 4500000),
        lastPxBase:  Math.floor(Math.random() * 4000000 + 4500000),
        securityType: _.sample(["CASH", "ETP", "EQUITY SWAP", "COMMON STOCK", "ADR", "PHYSICAL INDEX FUTURE"]),
        lastUSD: Math.floor(Math.random() * 4000000 + 4500000),
        endFXr: Math.floor(Math.random() * 4000000 + 4500000),
        baseCCY: _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]),
        riskCCY:  _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]),
        adminSettleCCY:  _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]),
        endFxB2R: Math.floor(Math.random() * 4000000 + 4500000),
        pxChg: Math.floor(Math.random() * 4000000 + 4500000),
        pxChgPercent:Math.floor(Math.random() * 4000000 + 4500000),
        costBasis: Math.floor(Math.random() * 4000000 + 4500000),
        tradePL: Math.floor(Math.random() * 4000000 + 4500000),
        dayPNL: Math.floor(Math.random() * 4000000 + 4500000),
        uOPercent: Math.floor(Math.random() * 4000000 + 4500000),
        uo: Math.floor(Math.random() * 4000000 + 4500000),
        plBPS: Math.floor(Math.random() * 4000000 + 4500000),
        mtdPL:  Math.floor(Math.random() * 4000000 + 4500000),
        ytdPL:  Math.floor(Math.random() * 4000000 + 4500000),
        pm: "ASIA_FOCUS",
        startFxr2Admin: Math.floor(Math.random() * 4000000 + 4500000),
        sixMdBeta: Math.floor(Math.random() * 4000000 + 4500000),
        sector: _.sample(["Non Corporate", "Consumer Staples", "Industrials", "Consumer Discretionary", "Materials", "Health Care", "Information Technology"]),
        industryGroup: _.sample(["FX", "Food, Beverage & Tobacco", "Transportation", "Energy", "Consumer Durables & Apparel",
        "Diversified Financials", "Health Care", "Information Technology", "Automobile & Components", "Banks", "Capital Goods"]),
        industry: _.sample(["FX", "Food, Beverage & Tobacco", "Transportation", "Energy", "Consumer Durables & Apparel",
        "Diversified Financials", "Health Care", "Information Technology", "Automobile & Components", "Banks", "Capital Goods"])
      })
    }
    return rowData;
  }
}
