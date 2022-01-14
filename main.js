NoseX = 0;
NoseY = 0;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/639xhck6/CLOWN-NOSE.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', getPose);
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,NoseX,NoseY,20,20);
//fill("red");
//stroke("red");
//circle(NoseX,NoseY,20);

}

function take_snapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function getPose(result){
            console.log(result);
    if(result.length > 0){
        console.log(result);
        console.log('nose x = '+ result[0].pose.nose.x);
        console.log('nose y = '+ result[0].pose.nose.y);
        NoseX = result[0].pose.nose.x;
     NoseY = result[0].pose.nose.y;
    }
}
