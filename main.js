Webcam.set({
    height:290,
    width:400,
    image_format:"jpeg",
    jpeg_quality:90
});
camera=document.getElementById("view")
Webcam.attach('#view')

function takePhoto(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML="<img id='myPhoto' src='"+data_uri+"'/>"

        }
    )
}

console.log("ml5_version=", ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NggIbvppn/model.json', modelLoaded)

function modelLoaded(){
    console.log("Model is Loaded")
}

function identifyObject(){
    img=document.getElementById("myPhoto")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if (error){
        console.error(error)
        
    }
    else{
        console.log(results)
        document.getElementById("resultObject").innerHTML=results[0].label
        document.getElementById("resultAccuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}