nose_x=0;
nose_y=0;
function preload(){
    lips=loadImage('https://i.postimg.cc/bwGN9fQX/Lips-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    image(lips,nose_x,nose_y,70,50);
}
function take_snapShot(){
    save('my_filter.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
   if(results.length>0){
    console.log(results);
    console.log("nose_x="+nose_x);
    console.log("nose_y"+nose_y);
    nose_x=results[0].pose.nose.x-30;
    nose_y=results[0].pose.nose.y+15;
   }
}