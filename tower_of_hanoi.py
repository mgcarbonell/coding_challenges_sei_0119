#################################################################
# There is a room in a temple in Hanoi with three time worn     #
# poles. According to an ancient Buddhist prophecy, a Buddhist  #
# monk must move 64 golden discs from one pole to the next.     #
# When the monk finishes, the world will end.                   #
#                                                               #
# Here are the rules:                                           #
# 1. Only one disk can be moved at one time.                    #
# 2. Each move consists of taking the upper disk from one       #
#     of the stacks and placing it on top of another stack      #
#     or on an empty pole.                                      # 
# 3. No larger disk may be placed on top of a smaller disk.     #
#################################################################

def tower_of_hanoi(n, start, destination, staging):
  if n == 1:
    print("Move disk 1 from start", start, "to destination", destination)
    return
  tower_of_hanoi(n - 1, start, staging, destination)
  print("Move disk", n, "from start", start, "to destination", destination)
  tower_of_hanoi(n - 1, staging, destination, start)

print(tower_of_hanoi(3, 'A', 'B', 'C'))