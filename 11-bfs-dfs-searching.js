// LINEAR SEARCHING

// O(1) in best case (when item is first in the list)
// O(N) in worst case (when item is last in the list)

const friends = ['kuldeep', 'subham', 'harsh', 'harshit', 'sahas'];

friends.indexOf('subham'); // returns index of an item

friends.findIndex((item) => item === 'harsh'); // returns index of an item

friends.find((item) => item === 'harshit'); // returns an item

friends.includes('kuldeep'); // returns true or false

// BINARY SEARCHING

// time complexity => O(log N)

// TREE/ GRAPH TRAVERSAL/SEARCHING

// time complexity => O(log N)
