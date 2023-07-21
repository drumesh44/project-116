function startClassification()
{
    nagitive.mediaDevices.getUserMedia({ audio : true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results);
}
}