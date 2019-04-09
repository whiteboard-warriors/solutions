/**
 * 
 * Given a set of n nuts of different sizes and n bolts of different sizes. There is a one-one mapping between nuts and bolts. Match nuts and bolts efficiently.
 * Constraint: Comparison of a nut to another nut or a bolt to another bolt is not allowed. 
 * It means nut can only be compared with bolt and bolt can only be compared with nut to see which one is bigger/smaller.
 * Other way of asking this problem is, given a box with locks and keys where one lock can be opened by one key in the box. 
 * We need to match the pair.
 * 
 * Source: https://www.geeksforgeeks.org/nuts-bolts-problem-lock-key-problem/
 */

let nuts = ['@', '#', '$', '%', '^', '&']
let bolts = ['$', '%', '&', '^', '@', '#']

const matchPairs = (nuts, bolts, low, high) => {
    if (low < high) {
        var pivot = partition(nuts, low, high, bolts[high]);
        partition(bolts, low, high, nuts[pivot]);
        matchPairs(nuts, bolts, low, pivot - 1);
        matchPairs(nuts, bolts, pivot + 1, high);
    }
}

const partition = (arr, low, high, pivot) => {
    console.log('Sorting: ' + arr);
    var i = low;
    var temp1, temp2;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            temp1 = arr[i];
            arr[i] = arr[j];
            arr[j] = temp1;
            i++;
        } else if (arr[j] == pivot) {
            temp1 = arr[j];
            arr[j] = arr[high];
            arr[high] = temp1;
            j--;
        }
    }
    temp2 = arr[i];
    arr[i] = arr[high];
    arr[high] = temp2;

    return i;
}

const print = (arr) => {
    console.log(arr);
}

matchPairs(nuts, bolts, 0, 5);
print(nuts);
print(bolts);