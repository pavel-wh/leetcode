// Recursive fibonacci slowly algo.

let fib = (d) => (d <= 2 ? 1 : fib(d - 1) + fib(d - 2));

// Caching decorator for slow recursive fibonacci algo.

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // If cache contain this Fibonacci value
      return cache.get(x); // Return this value
    }

    let result = func(x); // Otherwise, call calculate funciton

    cache.set(x, result); // And caching result ща ершfunction value
    return result;
  };
}

fib = cachingDecorator(fib);

// Analog python function range for generate range of numbers
let range = (n) => [...Array(n).keys()];

// Iterate Fibonacci algo

let fiboIterate = (n) => {
  let [f0, f1] = [0, 1];
  for (i in range(n)) {
    [f0, f1] = [f1, f0 + f1];
  }
  return f1;
};

console.log(fib(1800));
