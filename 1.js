// NO. 1 > MONEY CHANGER

function getMoneyChange(money) {
    //your code here
    const keysOfMoneyStocks = Object.keys(moneyStocks)
    // console.log(keysOfMoneyStocks);
    if (money < Number(keysOfMoneyStocks[0])) {
        // console.log('masuk');
        return 'Maaf uang kembalian tidak cukup'
    }
    let flag = true
    while (money >= Number(keysOfMoneyStocks[0])){
        let amountOfMoneyStocks = 0
        for (const key in moneyStocks) {
            amountOfMoneyStocks += Number(key) * moneyStocks[key]
        }
        amountOfMoneyStocks < money ? flag = false : flag
        if (!flag) {
            return 'Maaf uang kembalian tidak cukup'
        }
        for (let i = keysOfMoneyStocks.length - 1; i >= 0; i--) {
            // console.log(typeof (moneyStocks[keysOfMoneyStocks[i]]));
            if (money >= Number(keysOfMoneyStocks[i]) && moneyStocks[keysOfMoneyStocks[i]] > 0) {
                money -= Number(keysOfMoneyStocks[i])
                moneyStocks[keysOfMoneyStocks[i]]--
                break
            }
        }
    }
  }
  
  const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
  }
  
  getMoneyChange(75000)
  /*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
  */
//  console.log(moneyStocks)
  getMoneyChange(190000)
  /*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
  */
//  console.log(moneyStocks)
  getMoneyChange(190000)
  /*
    Maaf uang kembalian tidak cukup
  */
//  console.log(moneyStocks)
  getMoneyChange(100000)
  /*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
  */
//  console.log(moneyStocks)
  getMoneyChange(400)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  console.log(moneyStocks)
  /*
  { '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
  */
  