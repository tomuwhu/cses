n = input()
a = list(map(int, input().split()))
o = 0
f = a[0]
for i in a:
    if i < f:
        o += f - i
    else:
        f = i
print(o)