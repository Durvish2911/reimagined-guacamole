Webcam.set({
height:300,
width:350,
image_format:"jpg",
jpg_quality:90,
constraints:{
facingMode:"environment"
}
});
var camera=document.getElementById("camera");
Webcam.attach('  #camera  ');
function take_snapshot(){
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +'"/>';
    });
}
console.log("ml5 version",ml5.version);
var varh=ml5.imageClassifier("MobileNet",hello);
function hello(){
    console.log("modellllltoadeda");
}
function heck(){
    var mama=document.getEleapturedmentById("captured_image");
    varh.classify(mama,gotresult);
}
function gotresult(error,results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
    
}