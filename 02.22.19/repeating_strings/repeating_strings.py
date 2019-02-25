#Given the following list of strings, print out each unique string, followed by a colon and the number of times it appears in the array: 

#var repeatingStrings = [“ocean”, “sand”, “ocean”, “waves”, “water”, “waves”, “water”, “sand”, “sand”, “water”, “sand”]; 

#An example of the output to return: 

#ocean: 2 
#sand: 4
#waves: 2
#water: 3

#Source: 
#https://practice.geeksforgeeks.org/problems/twice-counter/0

repeatedStrings = ['ocean','sand','ocean','waves','water','waves','water','sand','water','sand']
results = {}
for s in repeatedStrings:
    if s in results:
        results[s] = results[s]+1
    else:
        results[s] = 1

print(results)

for r in results:
    print("{0}: {1}".format(r, results[r]))
    
