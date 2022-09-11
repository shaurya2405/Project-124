function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(20, 100);

    canvas = createCanvas(400, 400);
    canvas.position(540, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is  Initialized an Loaded");
}

function draw()
{
    background("#5196e3");
}

function gotPoses(results, error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0)
    {
        console.log(results);

        console.log("rightWrist_x = "+ results[0].pose.rightWrist.x + "rightWrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftWrist_y = "+ results[0].pose.leftWrist.x + "leftWrist_y = " + results[0].pose.leftWrist.y);
    }
}