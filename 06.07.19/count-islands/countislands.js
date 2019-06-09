/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let total = 0; 
    // To solve this problem we are going to interate the complete matrix 
    // As we find each '1' we will enter dfs/bfs to replace all of the '1's 
    // surrounding the four sides until we hit '0' or we leave the boundary of the matrix
    // this works because as we move accross the matrix, the left over '1's will only be
    // in diagonal or seperated by the pervious islands with atleast 1 row/col of '0'
    for (let r = 0; r <grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                 dfs(grid,r,c)
                //bfs(grid, r, c); 
                total++;
            }
        }
    }
    return total; 
};

// DFS is the easier method between the two since we are just 
// going to search all sides of an existing '1', it doesnt matter much
// what order we do this in. 
const dfs = (grid, row, col) => {
    if ('1' === grid[row][col]) {
    grid[row][col] = '0'; 
        if (col > 0) dfs(grid, row, col - 1);
        if (col < grid[row].length - 1) dfs(grid, row, col + 1);
        if (row > 0) dfs(grid, row - 1, col);
        if (row < grid.length - 1) dfs(grid, row + 1, col);
     }
}

// -BFS is little bit more complex as we are cycling around the current '1'
// and moving outwards and adding to a queue.
// -Here is a simple way to do so by storing each row and col as a tuple, 
// into the queue. Then scan the surrounding sides.
const bfs = (grid, row, col) => {
    let queue = []; 
    // change the current '1' into water
    grid[row][col] = '0'; 
    // Just like in a tree push into the queue
    // except lets just move the row and cols so late we can use 
    // them to replace the grid
    queue.push([row,col]);

    while (queue.length !== 0) {
        let current = queue.shift();
        //resigning here just so we know what a row and col is
        let row = current[0];
        let col = current[1];
        
        // check each of the sides to see where we are, also we only want to add
        // to the queue if that side is a '1'
        if (col > 0 && grid[row][col - 1] === '1') {
            // with your assigned row and col replace the grid if this is true
            grid[row][col - 1] = '0';
            // keep on moving things to your queue until this condition isnt true
            queue.push([row, col - 1]);                
        }
        
        if (col < grid[row].length -1 && grid[row][col + 1] === '1') {
            grid[row][col + 1] = '0';
            queue.push([row, col + 1]);
        }
        
        if (row > 0 && grid[row -1][col] === '1') {
            grid[row -1][col] = '0';
            queue.push([row - 1, col])
        }
        
        if (row < grid.length -1 && grid[row + 1][col] === '1') {
            grid[row + 1][col] = '0';
            queue.push([row + 1, col]);
        }    
    }
}

let grid = [
    ['1','1','0','0','0'], 
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

console.log('Num Islands: '+numIslands(grid));