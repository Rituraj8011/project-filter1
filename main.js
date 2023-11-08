noseX=0;
noseY=0;

lefteyeX=0;
righteyeX=0;
len =0;


function preload() {
    mustache = loadImage('https://i.postimg.cc/9Md7zgVq/pngtree-moustache-handlebar-mustache-vector-png-image-4505748-removebg-preview.png')
}  

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    tint_color = "";


    poseNet = ml5.poseNet(video, modalLoded);
    poseNet.on('pose', gotPoses);
}

function modalLoded() {
    console.log('poseNet Is Initialized');
    
}

function draw() {
    image(video, 0, 0, 300, 600);
   
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(mustache, noseX, noseY, 100, 100);
    //image(mustache, noseX, noseY, len, 100);

    tint_color = document.getElementById("color_name").value;   
    tint(tint_color);
    
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
   

    if(results.length > 0)
    {
     console.log(results);
     noseX = results[0].pose.nose.x-50;
     noseY = results[0].pose.nose.y-30;  
     lefteyeX = results[0].pose.leftEye.x-50;
     righteyeX = results[0].pose.rightEye.x-50;   
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
     len = righteyeX-lefteyeX;
    }
}     