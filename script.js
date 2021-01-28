"use strict";

// #1. ___________________________________________________________________________________

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    pass: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    pass: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    pass: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    pass: true,
  },
];

// #2. ___________________________________________________________________________________

// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    pass: newScore >= 60,
  };
  array.push(newSubmission);
};

addSubmission(submissions, "Kerry", 80, "2020-01-27");
console.log(submissions);

// #3. ___________________________________________________________________________________

// Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions);
console.log(submissions);

// #4. ___________________________________________________________________________________

// Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name
      return array.splice(index, 1)
    };
};

deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

// #5. ___________________________________________________________________________________

// Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  if (score >= 60 ? true : false); 
};

editSubmission(submissions, 1, 70);
console.log(submissions);

// #6. ___________________________________________________________________________________

// Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

const findSubmissionByName = (array, name) => {
  let found = array.find((submission) => {
    return submission.name === name;
  });
  return found;
}
console.log(findSubmissionByName(array, `Jill`));

// #7. ___________________________________________________________________________________

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

// const findLowestScore = (array) => {
//     let sum = 0; array.forEach((score) => {sum += number;
// });
// console.log(sum);
// }

// const calcSum = (array) => {
//     let sum = 0;
//     array.forEach((number) => {
//       sum += number;
//     });
//     return sum;
//    };

// console.log(findLowestScore(submissions));

// #8. ___________________________________________________________________________________

// Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAverageScore = (array) => {
  function findAverageScore(array) {
    let sum = 0;
    for(let i = 0; i < array.length;i++){
        sum += score[i];
    return sum / score.length;
  }
};

console.log(findAverageScore(submissions));

// #9. ________________________________________________________________________________

// Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.score >= 60;
  });
};
console.log(filterPassing(score));

// #10. ___________________________________________________________________________________

// Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((submission) => {
    return submission.score >= 90;
  });
};
console.log(filter90AndAbove(score));
