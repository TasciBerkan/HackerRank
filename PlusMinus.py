#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    pos=0
    neg=0
    zero=0
    lengthOfArr=len(arr)
    for i in arr:
        if i > 0:
            pos+=1
        elif i==0:
            zero+=1
        elif i<0:
            neg+=1
        
        
    print("{:.6f}".format(pos/lengthOfArr));
    print("{:.6f}".format(neg/lengthOfArr));
    print("{:.6f}".format(zero/lengthOfArr));
            
if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
