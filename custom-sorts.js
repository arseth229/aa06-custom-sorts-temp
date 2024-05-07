function ageSort(users) {
  
 users.sort((a, b) => a.age - b.age)
 return users;
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) {
      return -1
    } else if (a % 2 === 0 && b % 2 !== 0) {
      return 1
    } else {
      return a - b;
    }
  })
  return arr;
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false;
  let arr = (s + t).split('')
  arr.sort();
  let letters = {};
  arr.forEach((val) => {
    if (letters[val]) {
      letters[val]++
    } else {
      letters[val] = 1
    }
  })
  for (let alph in letters) {
    if (letters[alph] % 2 !== 0) {
      return false;
    }
  }
  return true;
  


}

function reverseBaseSort(arr) {
  let sorted = arr.sort((a, b) => {
    let A = a.toString().length;
    let B = b.toString().length;
    if (A === B) {
      return a - b
    } else {
    return B - A
    }
  })
  return sorted;

}

function frequencySort(arr) {
  let count = {};
  const finArr = [];
  arr.forEach((num) => {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1;
    }
  })
  arr.sort((a, b) => {
     if (count[a] === count[b]) {
      return b - a
     } else {
      return count[a] - count[b];
     }
  })
  return arr;
}
  

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
