music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {

    soundFormats('mp3', 'ogg');
    music1 = loadSound(music.mp3);
    music2 = loadSound(music2.mp3);
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function gotPoses(results) {
    if (results > 0) {
        console.log(results);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + rightWristY);

        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + leftWristX + "rightWristY" + rightWristY);

    }
}

function modelLoaded() {
    console.log('PoseNet is Initializes');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

//  setup();