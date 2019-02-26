#!/usr/bin/env python
# coding: utf-8

# In[3]:


# You are managing an auction with 650 bidders, each bidder is given a bidding card with their number printed on it. However, the numbers 0,1,6,8,9 all look the same upside-down or right-side up.
# For example, “81” looks like “18” when held upside down.
# Write an algorithm to determine if given a number if it’s 
# possible that the card is displayed upside-down.
# The cards do not have leading 0s for numbers with fewer than 3 digits, 
# so they are not printed “01” for “1” or “071” for “71”  

from IPython.core.debugger import set_trace

flippable_digits = ['0','1','6','8','9']

# recursive function to iterate through digits in num return false if there
# is a non-flippable digit
def flip_digit(digit, str_num_arr):
#     set_trace()
    if(digit > len(str_num_arr)-1):
        return True
    elif(str_num_arr[digit] not in flippable_digits):
        return False 
    return flip_digit(digit+1, str_num_arr)
        
def can_card_be_flipped(num):
#     set_trace()
    string_num = str(num) #convert number to string
    str_num_arr = list(string_num) # '69' => ['6','9']
    
    # base case (reverse the string and see if it starts with 0)
    if(str_num_arr[::-1][0] == '0'):
        return False
    
    reversed_as_int = int(''.join([str(c) for c in str_num_arr[::-1]]))
    
    if(reversed_as_int > 650):
        return False
    
    return flip_digit(0, str_num_arr)

# assume inputs are less than 650
# test_cases = (161, 365, 72, 68, 1, 11, 69, 96, 100)

# set_trace()
for num in range(1,651):
    print("{0}: {1}".format(num, can_card_be_flipped(num)))

