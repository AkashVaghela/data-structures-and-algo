# graph types

- directed graphs
- undirected graphs

- weighted graphs
- unweighted graphs

- cyclic
- acyclic

# ways to represent a graph

1. edge list
   const graph = [[0,2], [2,3], [2,1], [1, 3]];

2. adjacent list
   const graph = [[2], [2,3], [0,1,3], [1,2]]

3. adjacent matrix
   const graph = [
   [0,0,1,0],
   [0,0,1,1],
   [1,1,0,1],
   [0,1,1,0]
   ]

# Advantages of graphs

- good at maintaining graph

# Disadvantages of graphs

- difficult to scale
