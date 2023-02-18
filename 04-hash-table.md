# hash tables are also called:

hash (in ruby)
hash maps
maps (in java)
unordered maps
dictionary (in python)
objects

- In JS objects are similar to hash tables.
- Hash function stores a key-value pair and points to it's memory address.

# Hash function:

- It creates a fixed sized output for any arbitary input size.
- Hash functions are one way function.
- It will create same output for same input (also called Idempotent).
- eg. md5 is one type of hash function.
- Md5 hash function[https://www.miraclesalad.com/webtools/md5.php]
- when we add property to an object, hash function generates hash based on that property and maps that generated hash to a memory address.

# Time complexity Array vs Hash table

**arrays** **hash table**
search O(n) search O(1)
lookup O(1) insert O(1)
push\* O(1) lookup O(1)
insert O(n) delete O(1)
delete O(n)

# Hash collision:

- when two pieces of data in a hash table share the same hash value.
- Hash collision slows down reading & writing of hash table by O(n/k) where k = size of hash table.

**Hash collision resolution techniques**

[https://en.wikipedia.org/wiki/Hash_table#Collision_resolution]

# Maps

- with ES6, maps are introduced which are similar to objects.
- maps let us store key in any type (function, number etc...) where as in object, key has to be a string
- maps also maintains an order of items.

# Sets

- with ES6, sets are introduces which are similar to arrays without duplicates.
- they only stores keys.

# hash tables advantages

fast lookups (good collision resolution needed)
fast inserts
flexible keys

# hash tables disadvantages

unordered
slow key iteration (we need to iterate over entire memory space)

### note:

optimizing a problem using hash table is a common problem asked in an interviews. where we generally use hash tables instead of nested loops to reduce time complexity from O(n^2) to O(n).
