var judgeCircle = function (moves) {

    let horiz = 0;
    let vert = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "L") {
            horiz -= 1;
        } else if (moves[i] == "R") {
            horiz += 1;
        } else if (moves[i] == "U") {
            vert += 1;
        } else {
            vert -= 1;
        }
    }

    if (horiz == 0 && vert == 0) {
        return true;
    }
    return false;

};