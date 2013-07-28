isPrime = function(n) {
  for (var i = 2; i < n; i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true; // intentionally wrong for 0 and 1
};