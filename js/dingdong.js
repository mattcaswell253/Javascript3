function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.dingDong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ding-dong");
    } else if (i % 3 === 0) {
      output.push("ding");
    } else if (i % 5 === 0) {
      output.push("dong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;
