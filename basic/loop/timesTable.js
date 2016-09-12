var timesTable = function(begin, end) {
  for (var i = begin; i <= end; i++) {
    console.log(`=================[${i}的乘法表]====================`);
    for (var j = 1; j <= 9; j++) {
      console.log(`${i}x${j}=${i*j}`);
    }
  }
}

module.exports = timesTable;
