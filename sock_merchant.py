##############################################################
# There is a large pile of socks that must be paired by      #
# color. Given an array of integers representing the         #
# color of each sock, determine how many pairs of socks      #
# with matching colors there are.                            #
#                                                            #
# Example:                                                   #
# n = 7                                                      #
# ar = [1,2,1,2,1,3,2]                                       #
#                                                            #
# There is one pair of color 1, and one of color 3.          #
# There are three odd socks left, one of each color.         #
# The numbers of pairs is 2.#                                #
# Complete the sockMerchant function:                        #
# sockMerchant has the following parameter(s):               #
# int n: the number of socks in the pile                     #
# int ar[n]: the colors of each sock.                        #
##############################################################

def sock_merchant(n, arr):
  # lets set up an empty array which will store the count
  # of each type of sock.
  count_of_socks = []

  # Now let's iterate through the array (arr) with a variable
  # of sock.
  # The set() creates an unordered collection of items
  # Every set element is unique and must be immutable.
  for sock in set(arr):
    # now we append the count of each sock in the array
    # to our variable count_of_socks
    count_of_socks.append(arr.count(sock))

  # now we return the sum but with some added logic:
  # // performs floor-based division: a // b is always an integer.
  return sum([i//2 for i in count_of_socks])

arr = [1, 2, 1, 2, 1, 3, 2]
n = 7

print(sock_merchant(n, arr))

