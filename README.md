# Big O Assessment

 ### O Boy! It's time to evaluate your understanding of Big O Notation!

 ##

  PART ONE: Please answer the following questions:

 1. Describe the purpose of Big 0.

    > Big O is a method of measuring the overall complexity of an algorithm. Helps describe the overall efficiency of an algorithm.

---


 2. What 2 things does it measure?

    > Time and space of an algorithm OR how we measure the speed and the amount of memory required for an alogithm to run.

---


 3. Which of the following shows Big O time complexity in order?

    a) O(1), O(n log n), O(log n), O(n), O(n^2)

    b) O(1), O(log n), O(n), O(n log n), O(n^2)

    c) O(1), O(log n), O(n log n), O(n), O(n^2)

    > b) O(1), O(log n), O(n), O(n log n), O(n^2)

---



4. Which of these algorithm(s) run in O(log n) time?

   Binary Search

   Bubble Sort

   Quick Sort (average case)

   Linear Search

   > Binary Search

---



5. Select the best time complexity that even the most efficient sort algorithm can have.

    O(log n)

    O(n log n)

    O(n)

    O(n^2)

    > O(n)

---


 6. Describe what sets these these 3 complexities apart from each other: O(1), O(n) and O(n^2)

    > Answer here

---


7. How would you recognize O(log n) and O(n log n) time complexities in a function?

    > Answer here

---

  ##

  PART TWO: In a new file, write examples of algorithms/functions for each of the Big O complexities below.
    Upload your file to your repository when complete and submit in Learn --> Exercises.

    1. O(1)

    function countTo10 (){
      for(var i = 0; i <= 10; i++) {
        console.log(i);
      };
    };
    countTo10();

    2. O(n)

    function countTo(number) {
      for(var i = 0; i <= number; i++) {
        console.log(i);
      };
    };
    countTo(20);

    3. O(n^2)

    var string = "Mississippi";

    function containsDups(string) {
      for(var i = 0; i <= string.length; i++){
        for (var j = 1; j <=string.length; j++){
          if (i === j) {
            console.log('true');
          }
          else {
            console.log('false');
          }
        }
      }
    };
    containsDups(string);
