var des = function(start) {
	console.log(start);
	if(start !== 0) {
		des(start -1);
	}
};

module.exports = des;