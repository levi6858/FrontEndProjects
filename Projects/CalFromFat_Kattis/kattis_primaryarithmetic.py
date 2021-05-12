import sys


lines = sys.stdin.readlines()

for line in lines[:-1]:
    tokens= line.split()
    argA = int(x for x in tokens[0])
    argB = int(x for x in tokens[1])
    print(argA + argB) 
    