Webcam.set({
height: 300,
width: 300,
image_format: "png",
png_quality: 100,

constraints:{
    facingMode: "envoironment"
}
});

webcam= document.getElementById("webcam");

Webcam.attach(webcam);

function take_photo(){
    Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    });
}

console.log("ml5 Version" , ml5.version);

classifier= ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function identify(){
img = document.getElementById("captured_image");
classifier.classify(img, finished);
}

function finished(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}

