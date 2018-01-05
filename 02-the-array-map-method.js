 // These all do the same thing:
  
  var stocker = (stocks) => stocks.map( stock => stock.price )
  var stocker = (stocks) => {
    return stocks.map( (stock) => stock.price )
  }
  var stocker = (stocks) => {
    return stocks.map(function(stock) {
      return stock.price
    })
  }

  var symbols = stocker([
    { symbol: "XXX", price: "240.22", volume: 23432  },
    { symbol: "YYY", price: "335.19", volume: 333  },
    { symbol: "ZZZ", price: "120.22", volume: 3224  }
  ])
  
  console.log( JSON.stringify(symbols) );
  
function getStockSymbols(stocks) {
    return stocks.map(stock => stock.symbol)
}
  
  var symbols = getStockSymbols([
    { symbol: "XXX", price: "240.22", volume: 23432  },
    { symbol: "YYY", price: "335.19", volume: 333  },
    { symbol: "ZZZ", price: "120.22", volume: 3224  }
  ])
  
  console.log( JSON.stringify(symbols) ); // => [ 'XFX', 'TNZ', 'JXJ' ]
  
  