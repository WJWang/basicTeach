function gcd(m, n) { 
	return n === 0 ? m : gcd(n, m % n); 
}

module.exports = gcd;