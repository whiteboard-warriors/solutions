/* 

Given a collection of intervals, merge all the overlapping Intervals.

For example:
Given [1,3], [2,6], [8,10], [15,18]
Return [1,6], [8,10], [15,18]

Make sure the returned intervals are sorted.

*/


var intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

var merge_intervals = function(intervals) {
	output_array = []
	curr_end = -1
	curr_start = -1
	counter = 0
	for (var i in intervals) {
		if (intervals[i][0] > curr_end) {
			if (counter != 0) {
				output_array.push([curr_start, curr_end])
			}
			curr_start = intervals[i][0]
			curr_end = intervals[i][1]
			counter = 1
		} else {
			curr_end = Math.max((curr_end, intervals[i][1]))
		}
	}

	// remember to add the last one
	output_array.push([curr_start, curr_end])
	return output_array
}

var merged = merge_intervals(intervals)
for (var i in merged) {
	console.log('(' + merged[i][0] + ',' + merged[i][1] + ') ')
}