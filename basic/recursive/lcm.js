var gcd = require('./gcd.js');

function lcm(m, n) {
	return m * n / gcd(m, n);
};

module.exports = lcm;
