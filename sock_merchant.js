/*************************** *******************************
* There is a large pile of socks that must be paired by    *
* color. Given an array of integers representing the       *
* color of each sock, determine how many pairs of socks    *
* with matching colors there are.                          *
*                                                          *
* Example:                                                 *
* n = 7                                                    *
* ar = [1,2,1,2,1,3,2]                                     *
*                                                          *
* There is one pair of color 1, and one of color 2.        * 
* There are three odd socks left, one of each color.       *
* The numbers of pairs is 2.                               *
*                                                          *
* Complete the sockMerchant function:                      *
* sockMerchant has the following parameter(s):             *
* int n: the number of socks in the pile                   *
* int ar[n]: the colors of each sock.                      *
************************************************************/

// One way to solve is to sort the array:
const sockMerchant = (n, arr) => {
  // we create a variable to hold our pairs.
  let pairs = 0
  // and then we sort the array.
  let sorted = arr.sort((a,b) => a - b)
  // console.log(arr, pairs)
  // => a sorted array pairs = 0

  // set up a loop, but we need to compare each item against
  // each other, so we need to stop at the LAST index.
  for (let i = 0; i < n - 1; i++){
    // now we actually compare each item of the array 
    // with its direct sibling.
    if(sorted[i] === sorted[i + 1]){
      // if a match: increase pairs.
      pairs++;
      // increment i by 1 since we've already checked it
      i += 1;
    }
  }
  // return our pairs.
  return pairs;
}

// Method using an Object to track our pairs

function sockMerchantObj(n, ar) {
    // Write your code here
    // var
    let pairs = 0;
    // we're going to use a hash (map)
    // for the sake of simplicity it will just be an object
    let sortByColor = {};
    // let sorted = ar.sort((a, b) => a - b)
    //logic
    for (let i = 0; i < n; i++) {
        let idx = ar[i]
        if (!sortByColor[idx]) {
            sortByColor[idx] = 1;
        } else {
            sortByColor[idx] = sortByColor[idx] + 1;
        }
    }
    
    for (let key in sortByColor) {
        let i = Math.floor(sortByColor[key] / 2)
        pairs = pairs + i
    }
    // return
    return pairs;
}

const n = 7
const arr = [1, 2, 1, 2, 1, 3, 2]

console.log(sockMerchant(n, arr));
console.log(sockMerchantObj(n, arr));

