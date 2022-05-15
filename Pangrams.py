#!/bin/python3

import math
import os
import random
import re
import sys
import string 

#
# Complete the 'pangrams' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def pangrams(s):
    s = s.lower()
    alphabet = list(string.ascii_lowercase) 
    check = all(item in s for item in alphabet)
    if check:
        return 'pangram'
    else:
        return 'not pangram'
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = pangrams(s)

    fptr.write(result + '\n')

    fptr.close()