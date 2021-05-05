'use strict'

/**
 * @param {string} s 
 * @param {int} n 
 */
function repeatedString(s, n) {
  let countTemp = 0,
    countA = 0,
    residuo = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      countTemp++
      if (i < residuo) {
        countA++
      }
    }
  }
  return ((n - residuo) / s.length * countTemp) + countA
}

function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 5 !== 0 && i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

function stripProperty(obj, prop) {
  for (const key in obj) {
    if (key === obj) {
      delete obj[prop]
    }
  }
  return obj
}

/**
 * @param {array} magazine 
 * @param {array} note 
 */
function checkMagazine(magazine, note) {
  note.map(string => {
    magazine.find((string2, index) => {
      if (string === string2) {
        magazine.splice(index, 1)
      }
    })
  })
}

/**
 * 
 * @param {number} start house starting point
 * @param {number} end house end point
 * @param {number} a apple tree location
 * @param {number} b orange tree location
 * @param {array} apples fallen apples
 * @param {array} oranges fallen oranges
 */
function countApplesAndOranges(start, end, a, b, apples, oranges) {

  const fallenApples = apples.map(apple => a + apple)
  const fallenOranges = oranges.map(orange => b + orange)
  let countA = 0, countO = 0
  fallenApples.map(fa => fa <= end && fa >= start ? countA++ : countA)
  fallenOranges.map(fo => fo <= end && fo >= start ? countO++ : countO)
  console.log(countA)
  console.log(countO)
}

/**
 * @param {array} grades 
 */
function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade >= 38) {
      const nextmultiple = Math.ceil(grade / 5) * 5
      if ((nextmultiple - grade) < 3) {
        return nextmultiple
      } else {
        return grade
      }
    } else {
      return grade
    }
  })
}
// console.log(repeatedString('aba', 10))
// console.log(repeatedString('aba', 10))
// console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
console.log(gradingStudents([73, 67, 38, 33]))