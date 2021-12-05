const arr = [-3, -2, -1, 0, 1, 2, 3];
const secondArr = [-2, 0, 1, 3];
// console.log(arr.indexOf(-4))

//o of n2

const sumZero = (sortedArr) => {
  const pairArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const num = sortedArr[i];
    const positiveNum = Math.abs(num);
    if (sortedArr.indexOf(positiveNum) !== -1 && num < 0) {
      pairArr.push(num);
      pairArr.push(positiveNum);
      break;
    }
  }
  if (pairArr.length > 0) return pairArr;
  return undefined;
};

console.log(sumZero(arr));
console.log(sumZero(secondArr));
console.log(sumZero([1, 2, 3]));

//of of n

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++/ii8;
    }
  }
}
