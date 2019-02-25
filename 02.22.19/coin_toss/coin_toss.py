# Wanna bet? Write an algorithm in a language of your choice that will flip a coin N times,
# and log the results. Bonus points for including the most frequently returned side after 
# the coin has been flipped N times. 
import random
i = 1
results = { 'heads': 0, 'tails': 0}
while i <= 100:
    flip = random.randint(0,1)
    print('Flip:', i, ', and its: ', 'heads' if flip == 0 else 'tails',end='\n')
    if flip == 0:
        results['heads'] = results['heads']+ 1
    else:
        results['tails'] = results['tails']+1
    i = i+1

if(results['heads'] > results['tails']):
    print('Heads wins:', results['heads'], end='\n')
else:
    print('Tails wins:', results['tails'], end='\n')
