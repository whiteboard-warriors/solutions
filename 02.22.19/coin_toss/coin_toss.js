/** 
 * Wanna bet? Write an algorithm in a language of your 
 * choice that will flip a coin N times, and log the results. 
 * Bonus points for including the most frequently returned side 
 * after the coin has been flipped N times. 
 **/
var results = { "heads": 0, "tails": 0};
for(var i = 0; i < 100; i++){
    // have to use Math.round because 0-1 not "0" or "1"
    var flip = Math.round(Math.random());
    // 0 or 1 = true / false in JS
    console.log("Flip: "+i+", And its...: "+ (flip ? "heads" : "tails"));
    // in JS can also say flip === 0
    if(flip){
        results.heads+=1;
    } else {
        results.tails+=1;
    }
}
console.log( (results.heads > results.tails ? "Heads wins: "+ results.heads : "Tails wins: "+results.tails) );