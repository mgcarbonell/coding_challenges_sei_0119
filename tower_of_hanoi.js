/******************************************************************
*  There is a room in a temple in Hanoi with three time worn      *
*  poles. According to an ancient Buddhist prophecy, a Buddhist   *
*  monk must move 64 golden discs from one pole to the next.      *
*  When the monk finishes, the world will end.                    *
*                                                                 *
*  But there are rules:                                           *
*  1. Only one disk can be moved at one time.                     *
*  2. Each move consists of taking the upper disk from one        *
*      of the stacks and placing it on top of another stack       *
*      or on an empty pole.                                       *
*  3. No larger disk may be placed on top of a smaller disk.      *
*                                                                 *
*  Shift all rings from peg A to peg B using peg C                *
*******************************************************************/

// Helllooo recursive algorithms!
// 1. disk = the problem size for recursion
// 2. start = the beginning tower
// 3. destination = the final tower
// 4. staging = the tower used as an intermediate location
// Recursive algorithms try to find subproblems and then express
// the solution for the original problem (disk) in terms of the
// solutions to the subproblems.
const towerOfHanoi = (disk, start, destination, staging) => {
  if (disk >= 1){
    // Move a tower of disk -1 to our staging pole, using our destination
    towerOfHanoi(disk - 1, start, staging, destination)

    console.log('Move disk', disk, ' from Tower', start, ' to Tower', destination)
    // Move a tower of disk - 1 from our staging peg to our destination
    // using the source.
    towerOfHanoi(disk - 1, staging, destination, start)
  }
}

console.log(towerOfHanoi(16, "A", "C", "B"))