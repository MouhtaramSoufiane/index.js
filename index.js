// Test Technique de SoftDev

// Soufiane MOUHTARAM
// Master's student in Distributed Systems & Artificial Intelligence at @ENSET
// Email: Soufianerespect21@gmail.com
// Tel : +212657096902

function solution1(N) {
  let lastNumber = 0;

  for (let i = 1; i <= N; i++) {

    const numberString = i.toString();

    let isNumberSorted = true;
    for (let j = 0; j < numberString.length - 1; j++) {
      if (numberString[j] > numberString[j + 1]) {
        isNumberSorted = false;
        break;
      }
    }

    if (isNumberSorted) {
      lastNumber = i;
    }
  }

  return lastNumber;
}

function solution2(L) {

  L.sort((a, b) => a - b);

  for (let i = 0; i < L.length; i++) {
    if (L[i] !== i + 1) {
      return i + 1;
    }
  }

  return L.length + 1;
}


function solution3(L) {

  const occurrences = {};
  for (const element of L) {
    occurrences[element] = (occurrences[element] || 0) + 1;
  }

  for (const element in occurrences) {
    if (occurrences[element] === 1) {
      return element;
    }
  }

  return undefined;
}



// Test methods

// ----------------------------------------------------------------
// solution1

const N1 = 132;
const N2 = 1000;
const N3 = 7;

console.log(solution1(N1)); // 129
console.log(solution1(N2)); // 999
console.log(solution1(N3)); // 7

// ----------------------------------------------------------------
// solution2


const L4 = [1, 2, 3];
const L5 = [-1, -3];
const L6 = [1, 4, 7, 5, 3, 6, 3];

console.log(solution2(L4)); // 4
console.log(solution2(L5)); // 1
console.log(solution2(L6)); // 2


// ----------------------------------------------------------------
// solution3


const L7 = [1, 3, 4, 3];
const L8 = [1, 5, 3, 6, 4, 3, 1, 5, 4];

console.log(solution3(L7)); // 1
console.log(solution3(L8)); // 6