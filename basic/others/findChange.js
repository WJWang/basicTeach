// HW 找零錢問題
var findChanges = function(inputMoney, salePrice) {
  var returnMoney = inputMoney - salePrice;
  if (returnMoney < 0 ) {
    console.log("輸入的金額不足，或是售價錯誤。");
  } else if ( (returnMoney % 1) !== 0) {
    console.log("輸入金額不能包含小數");
  } else {

    var thoundsandNumReturn = 0;
    var fiveHundredNumReturn = 0;
    var hundredNumReturn = 0;
    var twoHundredNumReturn = 0;
    var fifityNumReturn = 0;
    var tenNumReturn = 0;
    var fiveNumReturn = 0;
    var dollarNumReturn = 0;

    if (returnMoney > 1000) {
      thoundsandNumReturn = Math.floor(returnMoney / 1000);
      returnMoney = returnMoney - thoundsandNumReturn*1000;
    }

    if (returnMoney > 500) {
      fiveHundredNumReturn = Math.floor(returnMoney / 500);
      returnMoney = returnMoney - fiveHundredNumReturn*500;
    }

    if (returnMoney > 200) {
      twoHundredNumReturn = Math.floor(returnMoney / 200);
      returnMoney = returnMoney - twoHundredNumReturn*200;
    }

    if (returnMoney > 100) {

      hundredNumReturn = Math.floor(returnMoney / 100);
      returnMoney = returnMoney - hundredNumReturn*100;
    }

    if (returnMoney > 50) {
      fifityNumReturn = Math.floor(returnMoney / 50);
      returnMoney = returnMoney - fifityNumReturn*50;
    }

    if (returnMoney > 10) {
      tenNumReturn = Math.floor(returnMoney / 10);
      returnMoney = returnMoney - tenNumReturn*10;
    }

    if (returnMoney > 5) {
      fiveNumReturn = Math.floor(returnMoney / 5);
      returnMoney = returnMoney - fiveNumReturn*5;
    }

    if (returnMoney > 0) {
      dollarNumReturn = Math.floor(returnMoney / 1);
    }

    var result = `你的找零為：
      1000元${thoundsandNumReturn}張,
      200元${twoHundredNumReturn}張,
      100元${hundredNumReturn}張,
      50元${fifityNumReturn}個,
      10元${tenNumReturn}個,
      5元${fiveNumReturn}個,
      1元${dollarNumReturn}個。`;

    console.log(result);
  }
};

module.exports = findChanges;
