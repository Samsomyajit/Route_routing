import pandas as pd
import numpy as np
import random
import copy
import matplotlib.pyplot as plt
import seaborn as sns


def print_pop(population):
    for i in population:
        print(i)


def initialize_map(p_zero, N):
    # first thing is to create the map that you're trying to navigate.  I will do this randomly.
    # This will be of the form of a adjacency matrix...
    # In other words, an NxN matrix where each row and column correspond to an intersection on a map
    # X_ij, then is equal to the amount of time that it takes to get from position i to position j
    # could also be considered a distance measure... but whatever is easier to think about.
    # practically, then we need a matrix that has numeric values in it... 
    # there should be some paths that don't exist.  I will assign these a 0.  
    # For instance, if you can't get directly from i to j, then X_ij = 0
    
    # The initialization needs some tuning parameters.  One is the proportion of 0's in the final result
    
    the_map = np.zeros((N,N))
    
    for i in range(0, N):
        for j in range(0, i):
            if random.random() > p_zero:
                the_map[i][j] = random.random()
                the_map[j][i] = the_map[i][j]
                
    return the_map


# Let's make a more complicated map that has at least 10 stops that have to be made and see what happens.

def initialize_complex_map(p_zero, N, groups):

    the_map = np.zeros((N,N))
    
    for i in range(0, N):
        for j in range(0, i):
            group_i = int(i/(N/groups))
            group_j = int(j/(N/groups))
            
            if random.random() > p_zero and abs(group_i - group_j) <= 1:
                the_map[i][j] = random.random()
                the_map[j][i] = the_map[i][j]
          
        
    ax = sns.heatmap(the_map)

    plt.show()
        
    return the_map

def create_starting_population(size, the_map):
    
    #this just creates a population of different routes of a fixed size.  Pretty straightforward.
    
    population = []
    
    for i in range(0,size):
        population.append(create_new_member(the_map))
        
    return population

    
def fitness(member):
    return True

def crossover(a,b):
    return a

def mutation(member):
    return member

def create_new_member():
    return member

def create_next_generation(population):
    return population

def main(number_of_iteration):
    return True
