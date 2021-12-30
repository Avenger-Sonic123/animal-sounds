function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1rrOYfR9E/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}