function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(600, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}
function modelLoaded() {
    console.log("Model is initialized");
}


function draw() {
    background("rgb(159, 213, 255)");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}