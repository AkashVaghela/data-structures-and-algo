// dynamic programming

// we are storing cache in global namespace which is not a good practice. so we can use closures to optimize it without polluting a global namespace.
let cache = {};

const memoizedAddTo69 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('Long calculation');
    return (cache[n] = n + 69);
  }
};

console.log(memoizedAddTo69(1));
console.log(memoizedAddTo69(1));

const memoizedAddTo69WithClosures = () => {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('Long calculation');
      return (cache[n] = n + 69);
    }
  };
};

let memoized = memoizedAddTo69WithClosures();

console.log(memoized(1));
console.log(memoized(1));

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoizedFibonacci = () => {
  let cache = {};
  return function memoizedFib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = memoizedFib(n - 1) + memoizedFib(n - 2);
        return cache[n];
      }
    }
  };
};

const memoizedFib = memoizedFibonacci();

console.log(memoizedFib(1));
console.log(memoizedFib(1));
