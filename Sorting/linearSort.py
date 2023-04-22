the_list = list(map(int, input("Enter the list of integers, add space while you enter the numbers: ").split()))

# perform linear sort
for i in range(len(the_list)):
    # block to compare each element with the rest of the list
    for j in range(i + 1, len(the_list)):
        # swap the entered elements if they are out of order
        if the_list[i] > the_list[j]:
            the_list[i], the_list[j] = the_list[j], the_list[i]

# print the sorted list
print("Sorted list:", the_list)