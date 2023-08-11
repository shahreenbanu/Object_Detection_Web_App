var status_1 = "";
var objects=[];
var coco_powder ="";
function setup() {
    canvas = createCanvas(900,600);
    canvas.center();
    coco_powder = ml5.objectDetector("cocossd",modelLoaded);
video = createCapture(VIDEO);
video.hide();
}

function preload(){
    //dog_cat = loadImage("dog_cat.jpg");
}
function modelLoaded() {
    console.log("coco_powder is loaded!!");
    status_1 = true;
    document.getElementById("status").innerHTML= "Status : started detecting objects";
coco_powder.detect(video, gotCoco);
}
function gotCoco(error, results) {
   if (error){
    console.log(error);
   }
   else{
    console.log(results);
    objects=results;
   }
}
function draw() {
    stroke("red");
    noFill();
image(video,0,0, 1000,700);


    if(status_1!=""){
        for (i=0; i<=objects.length; i++) {
        console.log("Come onnn " + objects[i].label);
        document.getElementById("status").innerHTML="Objects Detected";
        document.getElementById("No._of_obj").innerHTML="The number of objects detected are " + objects.length;
     rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width);
     text(objects[i].label,objects[i].x+10 ,objects[i].y+10);
     }
     
}


   

//rect(objects[0].x),Math.round(objects[0].y),Math.round(objects[0].height),Math.round(objects[0].width);
//text("Cat",460,170);
}