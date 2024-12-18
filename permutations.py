n = int(input())
if n <= 3 and n != 1:
    print('NO SOLUTION')
else:
    for i in range (n-1, 0, -2):
        print(i, end = ' ')
    print(n, end = ' ')
    for j in range(n-2, 0, -2):
        print(j, end = ' ')
print()