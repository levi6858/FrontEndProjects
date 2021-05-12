import math

T = int(input())
avg = 0
token = []
total = 0
final = []

# numbers = [int(x) for x in input().split()]

for case in range(T):
    total = 0
    avg = 0
    token = input().split
    s = int(token[0])
    token.remove(token[0])

    for x in range(s):
        avg = avg + int(token(x))
    
    avg = avg/(range(s))

    for y in range(s):
        if(token(y) >= avg):
            total+=1
    
    final.append(total/range(s))