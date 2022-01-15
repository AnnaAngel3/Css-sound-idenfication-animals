//https://teachablemachine.withgoogle.com/models/AXIr6ocUy/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AXIr6ocUy/model.json',modelready)
    
}
function modelready(){
    console.log("model is loaded")
}