music1 = "";
music2 = "";

music_status1 = "";
music_status2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;

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
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist"+ scoreLeftWrist);

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

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0)
    {
        circle(leftWristX, leftWristY, 20);

        music1.stop();

        if(music_status2 == false)
        {
            music2.play();
            document.getElementById("song_name").innerHTML  = "Playing - Harry Potter theme Song";

        }
    }


}




