a = input()
prev = "x"
length = 1
maxlen = 1
for i in a: 
    if i == prev:
        length += 1
        if length > maxlen:
            maxlen = length
    else:
        length = 1
        prev = i
print(maxlen)