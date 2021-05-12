
len = input ()

first = 1
second = 1

for n in range(int(len)):
    temp1 = first
    temp2 = second
    first = second
    second = temp1 + temp2

print(second)
