with open('wordlist.txt', 'r') as f:
    data = f.read().split("\n")

output = '{'
for i in range(0, len(data), 2):
    if data[i]:
        tmp = data[i+1]
        data[i+1] = data[i+1]
        data[i] = tmp
    output += f'"{data[i]}": "{data[i+1]}",\n'

output += '}'
print(output)
