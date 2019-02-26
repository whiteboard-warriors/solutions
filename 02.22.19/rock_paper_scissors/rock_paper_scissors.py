#!/usr/bin/env python
# coding: utf-8

# In[4]:


# Let’s play a game. Write out a simple version of “Rock, Paper, 
# Scissors” in the language of your choice. 
# The game should allow for two “players”, it should print 
# out the results of each round, and the game will be completed 
# when a player has won a minimum of four rounds. 
# The rules are as follows: 

#Rock beats Scissors
#Scissors beats Paper
#Paper beats Rock

#Source: 
#https://practice.geeksforgeeks.org/problems/rock-paper-scissors/0
from random import randint

from IPython.core.debugger import set_trace

def play_game():
#     set_trace()
    p1Wins = 0
    p2Wins = 0
    counter = 0
    while(p1Wins < 4 and p2Wins < 4):
#         set_trace()
        player1Roll = randint(0,2)
        player2Roll = randint(0,2)
        if player1Roll == player2Roll:
            print("Tie...")
        elif player1Roll is 0 and player2Roll is 2 or player1Roll is 1 and player2Roll is 0 or player1Roll is 2 and player2Roll is 1:
            print("Player 1 wins...")
            p1Wins += 1
            
        elif player2Roll is 0 and player1Roll is 2 or player2Roll is 1 and player1Roll is 0 or player2Roll is 2 and player1Roll is 1:
            print("Player 2 wins...")
            p2Wins += 1
            
        counter+=1
        
    print("P1: {0}, P2: {1}".format(p1Wins, p2Wins))
    
play_game()

