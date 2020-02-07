var socket = io();

side = 20;
n = 30;
m = 30;

function setup() {
    createCanvas(n * side, m * side);
    background('#acacac');
}

function nkarel(matrix) {
   
    
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

socket.on('send matrix', nkarel)



function addGrassEater() {
    socket.emit("add grassEater")
}

function addKerpar2(){
    socket.emit("add Kerpar2")
}

function addGishatich(){
    socket.emit("add Gishatich")
}
