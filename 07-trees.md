# tree types

- linked lists (singly & doubly linked lists)
- binary search trees (balanced (AVL, red-black tree) & unbalanced BST)
- heap (binary heap, priority queue)
- trie

# Binary search tree (Balanced)

lookup O(log N)
insert O(log N)
delete O(log N)

# Binary search tree (Unbalanced)

lookup O(N)
insert O(N)
delete O(N)

# Binary Heap

lookup O(N)
insert O(log N)
delete O(log N)

# Advantages of BST

- Better than O(n)
- ordered
- flexible size

# Disadvantages of BST

- no O(1) operations

# Advantages of Binary Heap

- Better than O(n)
- priority
- flexible size
- fast insertion

# Disadvantages of Binary Heap

- slow lookup

<!-- Definations -->

**perfect binary tree**
A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level. Perfect Binary Tree.

**full Binary tree**
A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children. It is also known as a proper binary tree.

**Binary search tree**
In a Binary search tree, the value of left node must be smaller than the parent node, and the value of right node must be greater than the parent node.

**balanced binary tree**
A balanced binary tree is a binary tree that follows the 3 conditions:

- The height of the left and right tree for any node does not differ by more than 1.
- The left subtree of that node is also balanced.
- The right subtree of that node is also balanced.

**unbalanced binary tree**

An unbalanced binary tree is a type of binary tree data structure where the nodes of the tree are arranged in a way that one subtree has a greater number of nodes than the other subtree.

**Binary Heap**
A Binary Heap is a Binary Tree with following properties.

1. It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

2. A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

3. Binary heaps are good at comparisons.

**Priority Queue**
Priority Queue is an extension of the queue with the following properties:

1. Every item has a priority associated with it.
2. An element with high priority is dequeued before an element with low priority.
3. If two elements have the same priority, they are served according to their order in the queue.

**trie**
A trie (derived from retrieval) is a multiway tree data structure used for storing strings over an alphabet. It is used to store a large amount of strings. The pattern matching can be done efficiently using tries.

1. trie also called prefix trees are generally good at searching strings
2. search engine auto suggestions, ip routing are some of the applications of it

**Log**
The power (or exponent) to which one base number must be raised (multiplied by itself) to produce another number.

log(10)100 = 2 because 10 \* 10 = 100

# solutions to balance a binary search tree

- AVL tree
- Red/black tree
