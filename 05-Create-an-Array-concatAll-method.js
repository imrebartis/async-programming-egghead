//  Flattening arrays

let exchanges = [
    [
      { symbol: 'XFX', price: 240.22, volume: 23432 },
      { symbol: 'TNZ', price: 332.19, volume: 234 },
    ],
    [
      { symbol: 'JXJ', price: 120.22, volume: 5323 },
      { symbol: 'NYN', price: 88.47, volume: 98275 },
    ],
  ];
  
//   exchanges.forEach(exchange => {
//     exchange.forEach(stock => {
//         console.log(stock)
//     }
//   )
// })

  //  Flattening arrays

let exchanges = [
    [
      { symbol: 'XFX', price: 240.22, volume: 23432 },
      { symbol: 'TNZ', price: 332.19, volume: 234 },
    ],
    [
      { symbol: 'JXJ', price: 120.22, volume: 5323 },
      { symbol: 'NYN', price: 88.47, volume: 98275 },
    ],
  ];
  
//   exchanges.forEach(exchange => {
//     exchange.forEach(stock => {
//         console.log(stock)
//     }
//   )
// })

Array.prototype.concatAll = function() {
    let results = [];
    this.forEach(subArray => {
      subArray.forEach(item => {
        results.push(item);
      });
    });
    return results;
  };
  
  let stocks = exchanges.concatAll();
  
  stocks.forEach(stock => console.log(stock.symbol)); 
/* =>
  XFX
  TNZ
  JXJ
  NYN
  */
  
  let stocks = exchanges.concatAll();
  
//   stocks.forEach(stock => console.log(stock.symbol)); 
/* =>
  XFX
  TNZ
  JXJ
  NYN
  */