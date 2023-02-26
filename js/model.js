const startButton = document.getElementById("startButton");
const uploadButton = document.getElementById("uploadButton");
const image = document.getElementById("image");
const resultContent = document.getElementById("resultContent");
const result = document.getElementById("result");
document.getElementById("getval").addEventListener("change", readURL, true);
let synth = window.speechSynthesis;

// Image Upload
function readURL() {
    var file = document.getElementById("getval").files[0];
    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
        image.src = e.target.result;
        ml5.imageClassifier("./model.json", "model.weights.bin").then((classifier) =>
            classifier.classify(image).then((results) => {
                uploadButton.classList.add('d-none');
                resultContent.classList.remove('d-none');
                result.innerText = results[0].label;
                speak(results[0].label);
                probability.innerText = results[0].confidence.toFixed(4);
            })
        );
    };
    reader.readAsDataURL(file);
  }
}


// Speech
function speak(text) {
    if (synth.speaking) {
        console.log('still speaking...')
        return;
    }
    if (text !== '') {
        let utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis);
    }
}

startButton.addEventListener("click", () => {
    startButton.classList.add('d-none');
    uploadButton.classList.remove('d-none');
    speak(`Take a picture of one the following objects: phone or game controller`);
})

// Score
const scoreButton = document.getElementById("scoreButton");
score = 0;

scoreButton.addEventListener("click", () => {
    score++;
    document.getElementById("score").innerHTML = score;
   }
);