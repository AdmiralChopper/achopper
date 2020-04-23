function totalCID(cid) {
  let values=[];
  cid.forEach((x) => {values.push(x[1])});
  let totalAmmount = values.reduce((a,b) => {return a+b});
  return totalAmmount;
}

function _2decimals(float) {return (Math.round(100*float)/100);}

function composeChange(change, cid) {
  let currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "HUNDRED": 100,
  }

  let newCid = JSON.parse(JSON.stringify(cid));
  let composedChange = {};
  for (let i=newCid.length-1;i>-1;i--) {
    change = _2decimals(change);
    //This line is for rounding and truncating to 2 decimal places 
    let totalAmmount = totalCID(newCid);
    totalAmmount = _2decimals(totalAmmount);
    if (change <0.01 && totalAmmount > 0) {
       return {status: "OPEN", change: Object.entries(composedChange)} } else if (change < 0.01) {
       return {status: "CLOSED", change: cid}
        }

    if (change >= currency[newCid[i][0]] && newCid[i][1] > 0) {
      change -= currency[newCid[i][0]];
      newCid[i][1] -= currency[newCid[i][0]];
      if (composedChange.hasOwnProperty(newCid[i][0])) {
        composedChange[newCid[i][0]] += currency[newCid[i][0]];
      } else {
        composedChange[newCid[i][0]] = currency[newCid[i][0]];
      }
      i++;
    }
  }

return {status: "INSUFFICIENT_FUNDS", change: []};
}



function checkCashRegister(price, cash, cid) {

  var change = cash-price;
  console.log(composeChange(change, cid))
  let composedChange = composeChange(change, cid);

  // Here is your change, ma'am.
  return composedChange;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 1], ["DIME", 2], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);