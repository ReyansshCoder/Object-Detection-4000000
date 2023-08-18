function setup(){
    c1=createCanvas(640,420)
    c1.center()
    mymodel=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Searching for objects"
}

i1=""
status=""
objects=[]

function preload(){
    i1=loadImage("dog_cat.jpg")
    console.log("ur image has come........looking beautiful")
    }

function modelLoaded(){
console.log("model loaded")
status= true;
mymodel.detect(i1,gotResult)
}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
objects=results
}}

function draw(){
image (i1, 0,0,640,420)
if(status!=""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Objects found!"
stroke("red")
a=floor(objects[i].confidence*100)
text (objects[i].label+" "+a+"%",objects[i].x,objects[i].y)
noFill ()
stroke("green")
rect (objects[i].x-50,objects[i].y,objects[i].width,objects[i].height)
}
}
}
