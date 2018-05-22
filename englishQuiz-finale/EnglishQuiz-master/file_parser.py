content = []
with open("quiz.txt", "r") as f:
    content = f.readlines()

content = [x.strip("\n") for x in content]

to_write = "questions = ["

for i in content:
    key, value = i.split(":")[0], i.split(":")[1]
    to_write += ("[\"" + key + "\",\""+value+"\"],\n")

with open("questions.js", "w") as f:
    f.write(to_write);
