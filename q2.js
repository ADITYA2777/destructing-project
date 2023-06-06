// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

function uniqueelements(...arr) {
    return new Set(...arr);
}
console.log(uniqueelements([1,2,2,4,5,6,6]));
console.log(uniqueelements([5,5,4,9,1,1,8]));

//////////////////////////////////////////////////////
// second mthod:
function duplicatesArray(numbers){
    const uniqueSet = new Set();

    for (let num of numbers) {
        if (!uniqueSet.has(num)) {
            uniqueSet.add(num);
        }
    }
    return ([...uniqueSet])
}
      const inputArray = [1, 2, 3, 4, 2, 1, 5];
      const uniqueArray = duplicatesArray(inputArray);

      console.log(uniqueArray);

