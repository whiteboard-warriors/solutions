const isPalindrome = (input) => {
    /* Edge case: if the input’s length is an odd number, ignore the middle (pivot). If it is even, compare all. */

    const compare = (input) => {
        for (let i = 0; i < Math.floor(input.length / 2); i++) {
            if (input[i] !== input[input.length - 1 - i]) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    };

    if (typeof input === "number") {
        /* If the type is a number, we need to convert to string to iterate */
        let newString = input.toString();
        return compare(newString);
    } else if (typeof input === "string" || Array.isArray(input)) {
        return compare(input);
    } else {
        console.log("This input type is not supported");
    }
}
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("Tacocat")); // false
console.log(isPalindrome(123456)); // false
console.log(isPalindrome([1, 2, 3, 4, "4", 3, 2, 1])); // false