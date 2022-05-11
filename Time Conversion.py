#!/bin/python3

import math
import os
import random
import re
import sys

#if PM and not 12, +12 cut PM
#if PM and 12, cut PM
#if AM and not 12, cut AM
#if AM and 12, make :2 00 and cut AM

def timeConversion(s):
    if s[8]=='P' and s[:2]!='12':
        s=str(12 + int(s[:2]))+s[2:]
    elif s[8]=='A' and s[:2]=='12':
        s='00'+ s[2:]
        
    return s[:-2]
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()