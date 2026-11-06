
let photos = [
    ""D:\pavithra\photo1.jpeg"",
    ""D:\pavithra\photo2.jpeg"",
    ""D:\pavithra\photo3.jpeg"",
    ""D:\pavithra\photo4.jpeg""
];

let messages = [
    "Who knew that a random beginning would turn into a friendship of 10 beautiful years? ❤️",
    "From silly jokes to uncontrollable laughter, you have given me memories I'll never get tired of remembering! 😂",
    "10 years later, and I still wouldn't trade this bond for anything. Some people are simply irreplaceable! 🫶",
"I might not say it often, but having you in my life is one of the things I'm genuinely thankful for. ❤️"
];

let currentPhoto = 0;


// When YES is clicked
function yesClicked() {

    document.getElementById("firstPage")
        .classList.add("hidden");

    document.getElementById("photoPage")
        .classList.remove("hidden");

}


// When NO is clicked
function noClicked() {

    document.getElementById("message").innerHTML =
        "Excuse me! 😂 Who said you can click NO? " +
    "Go back and click YES! 😌❤️";

}


// When a photo is clicked
function showMessage() {

    document.getElementById("photoMessage")
        .innerHTML = messages[currentPhoto];

    document.getElementById("nextButton")
        .classList.remove("hidden");

}


// Move to next photo
function nextPhoto() {

    currentPhoto++;

    if (currentPhoto < photos.length) {

        document.getElementById("photo").src =
            photos[currentPhoto];

        document.getElementById("photoCount").innerHTML =
            "Memory " + (currentPhoto + 1);

        document.getElementById("photoMessage").innerHTML = "";

        document.getElementById("nextButton")
            .classList.add("hidden");

    }

    else {

        document.getElementById("photoPage")
            .classList.add("hidden");

        document.getElementById("finalPage")
            .classList.remove("hidden");

    }

}
