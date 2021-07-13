/******************************************************************************
*  For this task, you will be given the elements of a perfect binary tree of  * 
*  characters, sorted within a simple tree data structure.                    *
*                                                                             *
*  Your goal is to write a function that starts at the root of the tree and   *
*  returns a counter clockwise traversal of the nodes at the edge of tree.    *
******************************************************************************/

let tree =
{
  "value": "a",
  "left": {
    "value": "g",
    "left": {
      "value": "m",
      "left": {
        "value": "f",
        "left": null,
        "right": null
      },
      "right": {
        "value": "c",
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": "p",
      "left": {
        "value": "s",
        "left": null,
        "right": null
      },
      "right": {
        "value": "r",
        "left": null,
        "right": null
      }
    }
  },
  "right": {
    "value": "w",
    "left": {
      "value": "u",
      "left": {
        "value": "t",
        "left": null,
        "right": null
      },
      "right": {
        "value": "o",
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": "z",
      "left": {
        "value": "k",
        "left": null,
        "right": null
      },
      "right": {
        "value": "x",
        "left": null,
        "right": null
      }
    }
  }
}

const traverseLeft = (cur, res) => {
  // base case
  if(!cur.left){
    return res
  }
  // traversal
  // when you find a node add it to the result array
  res.push(cur.value)
  return traverseLeft(cur.left, res)
}

const traverseLeaves = (tree, res) => {
  // base case
  if(!cur.left){
    res.push(cur.value)
    return res
  }
  // traversal
  traverseLeaves(cur.left, res)
  traverseLeaves(cur.right, res)
  return res
}

const traverseRight = (cur, res) => {
  // base case
  // it's almost like the left side, just the right side!
  if(!cur.right){
    return res
  }

  // traversal
  // note that we need to traverse FIRST and THEN the action.
  traverseRight(cur.right, res)
  res.push(cur.value)
  return res
}

const counterClockwiseTraversal = (tree){

  let result = []

  // our helper function
  function traverse(cur, leftMost, rightMost) {
    // left
    if(leftMost){
      result.push(cur.value)
    }

    // leaves
    if (!cur.left) {
      result.push(cur.value)
      return
    }

    traverse(cur.left, leftMost, false)
    traverse(cur.right, false, rightMost)
    // right
    if (rightMost && !leftMost ) {
      result.push(cur.value)

    }

  }

  traverse(tree, true, true)
  return result
}

console.log(counterClockwiseTraversal(tree))


// Thank you to Uber for the question!
