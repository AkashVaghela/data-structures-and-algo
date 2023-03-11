# dynamic programming

Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later.

# cache

A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.

# memoization

- it is one type of caching
- it is a form of caching which involves caching the return value of function based on it's parameters

# when to apply DP?

1. a problem can be divided into subproblems
2. recursive solution
3. are there repetitive subproblems?
4. memoize subproblems
