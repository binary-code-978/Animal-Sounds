function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-bq5a3Nv2/model.json', modelReady);
}

function modelReady() {
    claassifier.classify(gotResults);
}