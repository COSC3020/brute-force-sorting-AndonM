[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974285&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

The best case is one in which the algorithm is fed an already sorted array. In this case only one permutation is tried giving us a time complexity of O(1). On the flip side, the worst case input is a reverse-sorted array. (i.e. one sorted in descending order) In this case we have a time complexity of O(N!) as every permutation of the array needs to be tested. Generating permutations randomly will still have a worst case time complexity of O(N!) however the average case may be different. The idea in randomly trying permutations without any systematic behavior is that we will stumble upon a sorted array before the systematic approach does. However, this is of course completely random so saying definitively whether or not this method is superior is difficult.
