# Recursion

- The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Using a recursive algorithm, certain problems can be solved quite easily.
- Examples of such problems are Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc.

1. identify the base case
2. identify the recursive case
3. usually it has 2 returns (return from base case & return from recursive case)

# Recursion vs Iteration

- Anything you do with a recursion can be done iteratively

# Advantages of graphs

- DRY (do not repeat yourself)
- More readibility

# Disadvantages of graphs

- requires more memory

# Tail call optimization

a technique to call recursion in a memory efficient way

# When to use recursion?

every time you are using a tree or converting something into a tree, consider recursion.

1. divided into a no. of subproblem that are smaller instances of the same problem.
2. each instance of the subproblem is identical in nature
3. the solution of each subproblem can be combined to solve the problem at hand

divide and conqure using recursion
