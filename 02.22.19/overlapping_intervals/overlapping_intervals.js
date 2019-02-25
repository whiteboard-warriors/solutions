/* 

Given a collection of intervals, merge all the overlapping Intervals.

For example:
Given [1,3], [2,6], [8,10], [15,18]
Return [1,6], [8,10], [15,18]

Make sure the returned intervals are sorted.

*/


const intervalArray = [[1, 3], [2, 6], [7, 9], [8, 10], [15, 18]]

const merge_intervals = (intervals) => {
	output_array = []
	curr_end = -1
	curr_start = -1
	counter = 0
	for (i in intervals) {
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

let merged = merge_intervals(intervalArray)
for (var i in merged) {
	console.log(`[${merged[i][0]}, ${merged[i][1]}]`)
}