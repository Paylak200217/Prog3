// var matrix = [
//     [1, 1, 1, 2, 2, 2],
//     [1, 1, 0, 2, 2, 2],
//     [1, 1, 0, 2, 2, 2],
//     [1, 1, 1, 2, 2, 0],
//     [1, 1, 2, 2, 2, 0],
//     [1, 1, 2, 2, 2, 1],
//     [1, 1, 1, 2, 2, 5],
// ];






var n = 30;
var m = 30;
var side = 20;
var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];

function setup() {
    frameRate(5);

    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = (random([0, 1 , 1, 1, 1, 1, 1, 1 ,1 ,1, 2 , 2, 2, 2, 2, 2, 2, 2, 2 ,2 , 2, 2, 3 ,4, 5]));
        }
    }

    createCanvas(n * side, m * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var kerpar1 = new Kerpar1(x, y, 4);
                kerpar1Arr.push(kerpar1);
            }
            else if (matrix[y][x] == 5) {
                var kerpar2 = new Kerpar2(x, y, 5);
                kerpar2Arr.push(kerpar2);
            }
        }
    }


    console.log(matrix);
    console.log(grassEaterArr)

}

function draw() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {

        grassEaterArr[i].eat();

    }
    for (var i in gishatichArr) {

        gishatichArr[i].eat();

    }
    for (var i in kerpar1Arr) {

        kerpar1Arr[i].eat();

    }
    for (var i in kerpar2Arr) {

        kerpar2Arr[i].move();

    }
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {
    //        if (matrix[y][x].index == 1) {
    //             matrix[y][x].mul();
    //         }
    //         else if (matrix[y][x].index == 2) {
    //             matrix[y][x].eat();
    //         }
    //         else if (matrix[y][x].index == 3){
    //             matrix[y][x].eat();
    //         }
    //         else if (matrix[y][x].index == 4){
    //             matrix[y][x].eat();
    //         }
    //         else if (matrix[y][x].index == 5){
    //             matrix[y][x].move();
    //         }
    //     }
    // }




    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (obj == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
               
            }
            else if (obj == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
               
            }
            else if (obj == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

        }
    }

}



