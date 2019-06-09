var removeOuterParentheses = function (S) {
    let result = '';
    let open = 0
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            if (open > 0) {
                result += '(';
            }
            open++;
        } else if (S[i] === ')') {
            if (open > 1) {
                result += ')';
            }
            open--;
        }
    }
    return result;
};