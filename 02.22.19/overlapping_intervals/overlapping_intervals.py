#Given a collection of intervals, merge all the overlapping Intervals.

#For example:
#Given [1,3], [2,6], [8,10], [15,18]
#Return [1,6], [8,10], [15,18]

#Make sure the returned intervals are sorted.

def merge_ranges(arr):
    # we stated that we assumed all intervals would be sorted
    arr.sort(key = lambda x: x[0])
    output_arr = []
    curr_end = -1
    counter = 0
    for i in range(len(arr)):
        if arr[i][0] > curr_end:
            if counter != 0:
                output_arr.append((curr_start, curr_end))
            curr_start = arr[i][0]
            curr_end = arr[i][1]
            counter = 1
        else:
            curr_end = max(curr_end, arr[i][1])
    
    output_arr.append((curr_start, curr_end))
    return ' '.join(map(str, [x for a in output_arr for x in a ]))


ranges = [(1,3), (2,6), (8,10), (15,18)]
print(merge_ranges(ranges))
