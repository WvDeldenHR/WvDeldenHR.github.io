if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.log("Something went wrong!");
        });
}

const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded)
const video = document.getElementById("webcam");

function modelLoaded() {
    console.log('Model Loaded!')
    classifier = featureExtractor.classification(video, videoReady)
}
function videoReady(){
    console.log("the webcam is ready")
}

const label = document.getElementById("label");

const labelOneBtn = document.querySelector("#labelOne");
const labelTwoBtn = document.querySelector("#labelTwo");
const labelThreeBtn = document.querySelector("#labelThree");
const trainbtn = document.querySelector("#train");

labelOneBtn.addEventListener("click", () => addGameControllerImage(), () => console.log("Game Controller"));
labelTwoBtn.addEventListener("click", () => addPhoneImage(), () => console.log("Phone"));
// labelThreeBtn.addEventListener("click", () => addPhoneImage(), () => console.log("Phone"));

trainbtn.addEventListener("click",  () => train(), () => console.log("train"));


label.innerText = "Ready when you are!";

function addGameControllerImage() {
    classifier.addImage(video, 'game controller', ()=>{
        console.log("added image to model!")
    })
}
function addPhoneImage() {
    classifier.addImage(video, 'phone', ()=>{
        console.log("added image to model!")
    })
}
// function addPhoneImage() {
//     classifier.addImage(video, 'phone', ()=>{
//         console.log("added image to model!")
//     })
// }

function train() {
classifier.train((lossValue) => {
    console.log('Loss is', lossValue)
    if(lossValue == null) console.log("Finished training")
})
}

// const label = document.getElementById("label")

setInterval(()=>{
    classifier.classify(video, (err, result) => {
        if (err) console.log(err)
        console.log(result)
        label.innerHTML = result[0].label
    })
}, 1000);
