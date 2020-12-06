// Memoization
function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args]
		}
		cosnt result = fn.apply(this.args);
		return result;
	}
}

// Factorial
function factorial(n) {
	return n !== 1 ? n * factorial(n-1) : 1;
}
