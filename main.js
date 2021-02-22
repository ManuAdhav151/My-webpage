canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_w = 100;
rover_h = 90;
background_img = "mars.jpg";
rover_img = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}
function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_w, rover_h);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadbackground();
        uploadrover();
        console.log("when up arrow is pressed, x="+ rover_x + "and y="+ rover_y);
    
    }
}
function down() {
    if (rover_y <= 510) {
        rover_y = rover_y + 10;
        uploadbackground();
        uploadrover();
        console.log("when down arrow is pressed, x="+rover_x + "and y="+ rover_y);
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadbackground();
        uploadrover();
        console.log("when left arrow is pressed, x="+rover_x + "and y="+ rover_y);
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadbackground();
        uploadrover();
        console.log("when right arrow is pressed, x="+rover_x + "and y="+ rover_y);
    }
}
