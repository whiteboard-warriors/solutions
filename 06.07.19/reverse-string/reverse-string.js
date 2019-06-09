const reverseInput = (input) => {
    /* Find the type of the input and create an empty array to store the reversed items 
     */

    let typeOf = typeof input;
    let reversed = [];

    const reverse = (input) => {
        /* Loop over the input starting at the end and push into the reversed array, then return it */
        for (let i = input.length - 1; i >= 0; i--) {
            reversed.push(input[i]);
        }
        return reversed;
    }

    /* If the input is a number, convert it to a string so we can iterate over it, then run the string through the reverse function. Convert the returned array from reverse() into a string, then into a number and return. */

    if (typeOf === "number") {
        let stringifyNumber = input.toString();
        let reversed = reverse(stringifyNumber);
        let convertFromArray = parseInt(reversed.join(''));
        return convertFromArray;
    }



    /* If the type is a string, run it through the reverse() function and join the result to return a string */
    else if (typeOf === "string") {
        return reverse(input).join('');
    }

    /* If the input is an array, run it through the reverse() function and return the result */
    else if (Array.isArray(input)) {
        return reverse(input);
    }

    /* We are not accepting other input types, so all other inputs should be discarded. */
    else {
        console.log("This input type is not supported");
    }
}

console.log(reverseInput("Reversing a string")); // "gnirts a gnisreveR"
console.log(reverseInput(12345)); // 54321
console.log(reverseInput(["a", "b", 1, "c", 2])); // [2, "c", 1, "b", "a"]