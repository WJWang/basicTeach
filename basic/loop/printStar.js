var printStar = function(level) {
  for (var i = 0; i < level; i++) {
    console.log(getSpaces(2*level-i)+getStars(2*i));
  }
};

var getStars = function(number) {
  var i = 0;
  var starString = "";
  while (i <= number) {
    starString = starString + "*";
    i = i+1;
  }
  return starString;
};

var getSpaces = function(number) {
  var i = 0;
  var spaceString = "";

  do {
    spaceString = spaceString + " ";
    i = i+1;
  } while (i <= number);

  return spaceString;
};

module.exports = printStar;
